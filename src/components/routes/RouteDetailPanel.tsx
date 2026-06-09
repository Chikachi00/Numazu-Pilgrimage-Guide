import { areaLabels, typeLabels } from "../../data/labels";
import type { PilgrimageRoute } from "../../types/route";
import type { Spot } from "../../types/spot";
import type { UserSpotStateMap } from "../../types/userState";
import { getGoogleMapsButtonLabel, getGoogleMapsUrl } from "../../utils/googleMaps";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { EmptyState } from "../ui/EmptyState";
import { routeDifficultyLabels, routeThemeLabels, routeTransportLabels } from "./routeLabels";

interface RouteDetailPanelProps {
  route?: PilgrimageRoute;
  spotsById: Map<string, Spot>;
  spotStates: UserSpotStateMap;
  onViewSpotOnMap: (spotId: string) => void;
}

function getRouteSpots(route: PilgrimageRoute, spotsById: Map<string, Spot>): Spot[] {
  return route.spotIds.flatMap((spotId) => {
    const spot = spotsById.get(spotId);
    return spot ? [spot] : [];
  });
}

export function RouteDetailPanel({
  route,
  spotsById,
  spotStates,
  onViewSpotOnMap,
}: RouteDetailPanelProps) {
  if (!route) {
    return (
      <Card className="route-detail-panel">
        <EmptyState title="请选择一条路线" description="点击左侧路线卡片查看点位顺序和巡礼建议。" />
      </Card>
    );
  }

  const routeSpots = getRouteSpots(route, spotsById);
  const completedCount = route.spotIds.filter((spotId) => spotStates[spotId]?.visited).length;

  return (
    <Card className="route-detail-panel">
      <div className="route-detail-header">
        <div>
          <p className="eyebrow">Route Detail</p>
          <h2>{route.title.zh}</h2>
        </div>
        <Badge tone="blue">{routeThemeLabels[route.theme]}</Badge>
      </div>

      <p className="route-detail-description">{route.description.zh}</p>

      <div className="route-detail-meta">
        <div>
          <span>Estimated</span>
          <strong>{route.estimatedHours}h</strong>
        </div>
        <div>
          <span>Difficulty</span>
          <strong>{routeDifficultyLabels[route.difficulty]}</strong>
        </div>
        <div>
          <span>Progress</span>
          <strong>
            {completedCount} / {route.spotIds.length}
          </strong>
        </div>
      </div>

      <div className="badge-row">
        {route.transport.map((item) => (
          <Badge key={item} tone="gray">
            {routeTransportLabels[item]}
          </Badge>
        ))}
      </div>

      {route.tips?.zh ? (
        <section className="route-tips">
          <h3>Tips</h3>
          <p>{route.tips.zh}</p>
        </section>
      ) : null}

      <section className="route-spot-sequence">
        <h3>点位顺序 / Spot Sequence</h3>
        <ol>
          {routeSpots.map((spot, index) => {
            const isVisited = Boolean(spotStates[spot.id]?.visited);
            const googleMapsUrl = getGoogleMapsUrl(spot);

            return (
              <li key={spot.id} className={isVisited ? "is-visited" : ""}>
                <span className="route-step-number">{index + 1}</span>
                <div className="route-step-body">
                  <div className="route-step-title">
                    <div>
                      <strong>{spot.name.zh}</strong>
                      {spot.name.ja ? <small>{spot.name.ja}</small> : null}
                    </div>
                    <Badge tone={isVisited ? "green" : "gray"}>{isVisited ? "已打卡" : "未打卡"}</Badge>
                  </div>
                  <div className="badge-row">
                    <Badge tone="blue">{areaLabels[spot.area]}</Badge>
                    <Badge tone="gray">{typeLabels[spot.type]}</Badge>
                    {spot.coordinateStatus === "verified" ? (
                      <Badge tone="green">坐标已校对</Badge>
                    ) : (
                      <Badge tone="amber">坐标待校对</Badge>
                    )}
                  </div>
                  <div className="route-step-actions">
                    <button className="button button-secondary" type="button" onClick={() => onViewSpotOnMap(spot.id)}>
                      查看地图中的点位
                    </button>
                    {googleMapsUrl ? (
                      <a className="button button-primary" href={googleMapsUrl} target="_blank" rel="noreferrer">
                        {getGoogleMapsButtonLabel(spot)}
                      </a>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Card>
  );
}
