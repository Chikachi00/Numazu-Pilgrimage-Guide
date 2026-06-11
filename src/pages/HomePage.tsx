import { useEffect, useMemo, useState } from "react";
import { FilterPanel } from "../components/filters/FilterPanel";
import { FilterToggleButton } from "../components/filters/FilterToggleButton";
import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { MapView } from "../components/map/MapView";
import { MarkerStyleControl } from "../components/map/MarkerStyleControl";
import { ProgressSummary } from "../components/spots/ProgressSummary";
import { SpotDetailPanel } from "../components/spots/SpotDetailPanel";
import { SpotList } from "../components/spots/SpotList";
import { SpotSearchBox } from "../components/spots/SpotSearchBox";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { spots } from "../data/spots";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSpotFilters } from "../hooks/useSpotFilters";
import { useSpotStates } from "../hooks/useSpotStates";
import type { MarkerCategory, MarkerCategoryOverrides, MarkerIconName, MarkerMode } from "../types/map";
import { filterSpots } from "../utils/filters";
import { STORAGE_KEYS } from "../utils/storage";

interface HomePageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

function getSpotIdFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);
  const spotId = params.get("spot");

  return spotId && spots.some((spot) => spot.id === spotId) ? spotId : undefined;
}

function getActiveFilterCount(filters: ReturnType<typeof useSpotFilters>["filters"]) {
  return [
    filters.query.trim(),
    filters.areas.length,
    filters.types.length,
    filters.layers.length,
    filters.characters.length,
    filters.status !== "all",
    filters.visibilityMode !== "featured",
  ].filter(Boolean).length;
}

export function HomePage({ currentPage, onNavigate }: HomePageProps) {
  const hashSpotId = getSpotIdFromHash();
  const [selectedSpotId, setSelectedSpotId] = useState<string | undefined>(hashSpotId);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(Boolean(hashSpotId));
  const [isMarkerStyleOpen, setIsMarkerStyleOpen] = useState(false);
  const [storedMarkerMode, setStoredMarkerMode] = useLocalStorage<MarkerMode | string>(
    STORAGE_KEYS.markerMode,
    "category_icon",
  );
  const [markerCategoryOverrides, setMarkerCategoryOverrides] = useLocalStorage<MarkerCategoryOverrides>(
    STORAGE_KEYS.markerCategoryOverrides,
    {},
  );
  const markerMode: MarkerMode = storedMarkerMode === "custom_icon" ? "custom_icon" : "category_icon";
  const {
    filters,
    setQuery,
    toggleArea,
    toggleType,
    toggleLayer,
    toggleCharacter,
    setStatus,
    setVisibilityMode,
    clearFilters,
  } = useSpotFilters();
  const {
    spotStates,
    getSpotState,
    toggleVisited,
    toggleFavorite,
    toggleWishlist,
  } = useSpotStates();

  const filteredSpots = useMemo(
    () => filterSpots(spots, filters, spotStates),
    [filters, spotStates],
  );
  const selectedSpot = spots.find((spot) => spot.id === selectedSpotId);
  const activeFilterCount = getActiveFilterCount(filters);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (isMarkerStyleOpen) {
        setIsMarkerStyleOpen(false);
      } else if (isFilterOpen) {
        setIsFilterOpen(false);
      } else if (isListOpen) {
        setIsListOpen(false);
      } else if (isDetailOpen) {
        setIsDetailOpen(false);
        setSelectedSpotId(undefined);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDetailOpen, isFilterOpen, isListOpen, isMarkerStyleOpen]);

  useEffect(() => {
    if (storedMarkerMode !== markerMode) {
      setStoredMarkerMode(markerMode);
    }
  }, [markerMode, setStoredMarkerMode, storedMarkerMode]);

  function handleSelectSpot(spotId: string) {
    setSelectedSpotId(spotId);
    setIsDetailOpen(true);
  }

  function handleCloseDetail() {
    setIsDetailOpen(false);
    setSelectedSpotId(undefined);
  }

  const filterDrawer = (
    <div className={`map-drawer map-drawer-left${isFilterOpen ? " is-open" : ""}`} aria-hidden={!isFilterOpen}>
      <div className="drawer-header">
        <div>
          <span className="eyebrow">Filters</span>
          <h2>筛选点位</h2>
        </div>
        <button className="drawer-close" type="button" aria-label="关闭筛选面板" onClick={() => setIsFilterOpen(false)}>
          ×
        </button>
      </div>
      <Card className="control-card">
        <SpotSearchBox value={filters.query} onChange={setQuery} />
        <ProgressSummary total={spots.length} states={spotStates} />
      </Card>
      <Card className="control-card">
        <FilterPanel
          filters={filters}
          onToggleArea={toggleArea}
          onToggleType={toggleType}
          onToggleLayer={toggleLayer}
          onToggleCharacter={toggleCharacter}
          onStatusChange={setStatus}
          onVisibilityModeChange={setVisibilityMode}
          onClear={clearFilters}
        />
      </Card>
    </div>
  );

  const listDrawer = (
    <div className={`map-drawer map-drawer-list${isListOpen ? " is-open" : ""}`} aria-hidden={!isListOpen}>
      <div className="drawer-header">
        <div>
          <span className="eyebrow">Spots</span>
          <h2>点位列表</h2>
          <p>{filteredSpots.length} 个结果</p>
        </div>
        <button className="drawer-close" type="button" aria-label="关闭点位列表" onClick={() => setIsListOpen(false)}>
          ×
        </button>
      </div>
      <SpotList
        spots={filteredSpots}
        selectedSpotId={selectedSpotId}
        getSpotState={getSpotState}
        onSelectSpot={(spotId) => {
          handleSelectSpot(spotId);
          setIsListOpen(false);
        }}
      />
    </div>
  );

  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="map-app-main">
        <MapView
          spots={filteredSpots}
          selectedSpot={selectedSpot}
          selectedSpotId={selectedSpotId}
          markerMode={markerMode}
          markerCategoryOverrides={markerCategoryOverrides}
          getSpotState={getSpotState}
          onSelectSpot={handleSelectSpot}
        />

        <div className="map-floating-controls map-floating-controls-left">
          <FilterToggleButton activeCount={activeFilterCount} onClick={() => setIsFilterOpen(true)} />
          <Button className="map-control-button" onClick={() => setIsListOpen(true)} aria-label="打开点位列表">
            <span aria-hidden="true">≡</span>
            列表
            <span className="control-badge">{filteredSpots.length}</span>
          </Button>
        </div>

        <div className="map-floating-controls map-floating-controls-right">
          <MarkerStyleControl
            mode={markerMode}
            categoryOverrides={markerCategoryOverrides}
            isOpen={isMarkerStyleOpen}
            onToggleOpen={() => setIsMarkerStyleOpen((current) => !current)}
            onModeChange={(value) => {
              setStoredMarkerMode(value);
            }}
            onCategoryIconChange={(category: MarkerCategory, icon: MarkerIconName) => {
              setMarkerCategoryOverrides((current) => ({ ...current, [category]: icon }));
            }}
            onReset={() => setMarkerCategoryOverrides({})}
          />
        </div>

        {isFilterOpen || isListOpen ? (
          <button
            className="drawer-backdrop"
            type="button"
            aria-label="关闭浮层"
            onClick={() => {
              setIsFilterOpen(false);
              setIsListOpen(false);
            }}
          />
        ) : null}

        {filterDrawer}
        {listDrawer}

        {isDetailOpen && selectedSpot ? (
          <aside className="floating-detail-panel" aria-label="点位详情">
            <button className="drawer-close detail-close" type="button" aria-label="关闭详情" onClick={handleCloseDetail}>
              ×
            </button>
            <SpotDetailPanel
              spot={selectedSpot}
              state={getSpotState(selectedSpot.id)}
              onToggleVisited={toggleVisited}
              onToggleFavorite={toggleFavorite}
              onToggleWishlist={toggleWishlist}
            />
          </aside>
        ) : null}
      </main>
    </>
  );
}
