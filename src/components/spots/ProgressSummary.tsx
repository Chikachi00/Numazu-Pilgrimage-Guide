import type { UserSpotStateMap } from "../../types/userState";
import { getProgressStats } from "../../utils/stats";

interface ProgressSummaryProps {
  total: number;
  states: UserSpotStateMap;
}

export function ProgressSummary({ total, states }: ProgressSummaryProps) {
  const stats = getProgressStats(total, states);

  return (
    <div className="progress-summary" aria-label="巡礼进度统计">
      <div>
        <span>已打卡</span>
        <strong>
          {stats.visited} / {stats.total}
        </strong>
      </div>
      <div>
        <span>收藏</span>
        <strong>{stats.favorite}</strong>
      </div>
      <div>
        <span>想去</span>
        <strong>{stats.wishlist}</strong>
      </div>
    </div>
  );
}
