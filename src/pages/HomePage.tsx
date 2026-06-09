import { useMemo, useState } from "react";
import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { AppShell } from "../components/layout/AppShell";
import { FilterPanel } from "../components/filters/FilterPanel";
import { MapView } from "../components/map/MapView";
import { ProgressSummary } from "../components/spots/ProgressSummary";
import { SpotDetailPanel } from "../components/spots/SpotDetailPanel";
import { SpotList } from "../components/spots/SpotList";
import { SpotSearchBox } from "../components/spots/SpotSearchBox";
import { Card } from "../components/ui/Card";
import { spots } from "../data/spots";
import { useSpotFilters } from "../hooks/useSpotFilters";
import { useSpotStates } from "../hooks/useSpotStates";
import { filterSpots } from "../utils/filters";

interface HomePageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

export function HomePage({ currentPage, onNavigate }: HomePageProps) {
  const [selectedSpotId, setSelectedSpotId] = useState(spots[0]?.id);
  const {
    filters,
    setQuery,
    toggleArea,
    toggleType,
    toggleCharacter,
    setStatus,
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

  const sidebar = (
    <>
      <Card className="control-card">
        <SpotSearchBox value={filters.query} onChange={setQuery} />
        <ProgressSummary total={spots.length} states={spotStates} />
      </Card>
      <Card className="control-card">
        <FilterPanel
          filters={filters}
          onToggleArea={toggleArea}
          onToggleType={toggleType}
          onToggleCharacter={toggleCharacter}
          onStatusChange={setStatus}
          onClear={clearFilters}
        />
      </Card>
      <Card className="list-card">
        <div className="list-header">
          <h2>点位列表</h2>
          <span>{filteredSpots.length} 个结果</span>
        </div>
        <SpotList
          spots={filteredSpots}
          selectedSpotId={selectedSpotId}
          getSpotState={getSpotState}
          onSelectSpot={setSelectedSpotId}
        />
      </Card>
    </>
  );

  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <AppShell
        sidebar={sidebar}
        map={
          <MapView
            spots={filteredSpots}
            selectedSpot={selectedSpot}
            selectedSpotId={selectedSpotId}
            onSelectSpot={setSelectedSpotId}
          />
        }
        detail={
          <SpotDetailPanel
            spot={selectedSpot}
            state={selectedSpot ? getSpotState(selectedSpot.id) : undefined}
            onToggleVisited={toggleVisited}
            onToggleFavorite={toggleFavorite}
            onToggleWishlist={toggleWishlist}
          />
        }
      />
    </>
  );
}
