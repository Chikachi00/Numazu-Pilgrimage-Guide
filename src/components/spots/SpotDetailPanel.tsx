import { areaLabels, characterLabels, typeLabels } from "../../data/labels";
import type { Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { getGoogleMapsUrl } from "../../utils/googleMaps";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { EmptyState } from "../ui/EmptyState";
import { SpotStatusButtons } from "./SpotStatusButtons";

interface SpotDetailPanelProps {
  spot?: Spot;
  state?: UserSpotState;
  onToggleVisited: (spotId: string) => void;
  onToggleFavorite: (spotId: string) => void;
  onToggleWishlist: (spotId: string) => void;
}

function DetailSection({ title, content }: { title: string; content?: string }) {
  if (!content) {
    return null;
  }

  return (
    <section className="detail-section">
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  );
}

export function SpotDetailPanel({
  spot,
  state,
  onToggleVisited,
  onToggleFavorite,
  onToggleWishlist,
}: SpotDetailPanelProps) {
  if (!spot || !state) {
    return (
      <Card className="detail-panel">
        <EmptyState title="请选择一个点位" description="点击地图 marker 或左侧列表查看详情。" />
      </Card>
    );
  }

  return (
    <Card className="detail-panel">
      <div className="detail-header">
        <div>
          <h2>{spot.name.zh}</h2>
          {spot.name.ja ? <p>{spot.name.ja}</p> : null}
        </div>
        <Badge tone="green">{areaLabels[spot.area]}</Badge>
      </div>

      <div className="badge-row">
        <Badge tone="gray">{typeLabels[spot.type]}</Badge>
        {spot.characters.map((character) => (
          <Badge key={character} tone="blue">
            {characterLabels[character]}
          </Badge>
        ))}
      </div>

      <DetailSection title="简介" content={spot.description.zh} />
      <DetailSection title="巡礼提示" content={spot.pilgrimageNote?.zh} />
      <DetailSection title="交通建议" content={spot.accessNote?.zh} />
      <DetailSection title="拍照提示" content={spot.photoTip?.zh} />

      {spot.recommendedDurationMinutes ? (
        <div className="duration-box">推荐停留时间：约 {spot.recommendedDurationMinutes} 分钟</div>
      ) : null}

      <div className="detail-actions">
        <a className="button button-primary" href={getGoogleMapsUrl(spot)} target="_blank" rel="noreferrer">
          Google Maps 导航
        </a>
        <SpotStatusButtons
          state={state}
          onToggleVisited={() => onToggleVisited(spot.id)}
          onToggleFavorite={() => onToggleFavorite(spot.id)}
          onToggleWishlist={() => onToggleWishlist(spot.id)}
        />
      </div>
    </Card>
  );
}
