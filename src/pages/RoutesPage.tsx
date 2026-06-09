import { useMemo, useState } from "react";
import { AppHeader, type AppPage } from "../components/layout/AppHeader";
import { RouteDetailPanel } from "../components/routes/RouteDetailPanel";
import { RouteList } from "../components/routes/RouteList";
import { routes } from "../data/routes";
import { spots } from "../data/spots";
import { useSpotStates } from "../hooks/useSpotStates";

interface RoutesPageProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
}

export function RoutesPage({ currentPage, onNavigate }: RoutesPageProps) {
  const [selectedRouteId, setSelectedRouteId] = useState(routes[0]?.id);
  const { spotStates } = useSpotStates();
  const spotsById = useMemo(() => new Map(spots.map((spot) => [spot.id, spot])), []);
  const selectedRoute = routes.find((route) => route.id === selectedRouteId);

  function handleViewSpotOnMap(spotId: string) {
    window.location.hash = `spot=${spotId}`;
    onNavigate("home");
  }

  return (
    <>
      <AppHeader currentPage={currentPage} onNavigate={onNavigate} />
      <main className="content-page routes-page">
        <div className="page-heading">
          <p className="eyebrow">Recommended Routes</p>
          <h2>人工路线推荐 / Recommended Routes</h2>
          <p>
            这些路线不是自动生成，而是基于沼津巡礼经验手动整理，适合作为旅行参考。你在地图页标记的
            已打卡状态，会自动反映到路线完成度里。
          </p>
        </div>

        <div className="routes-layout">
          <RouteList
            routes={routes}
            selectedRouteId={selectedRouteId}
            spotStates={spotStates}
            onSelectRoute={setSelectedRouteId}
          />
          <RouteDetailPanel
            route={selectedRoute}
            spotsById={spotsById}
            spotStates={spotStates}
            onViewSpotOnMap={handleViewSpotOnMap}
          />
        </div>
      </main>
    </>
  );
}
