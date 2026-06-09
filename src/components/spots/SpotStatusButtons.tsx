import type { UserSpotState } from "../../types/userState";
import { Button } from "../ui/Button";

interface SpotStatusButtonsProps {
  state: UserSpotState;
  onToggleVisited: () => void;
  onToggleFavorite: () => void;
  onToggleWishlist: () => void;
}

export function SpotStatusButtons({
  state,
  onToggleVisited,
  onToggleFavorite,
  onToggleWishlist,
}: SpotStatusButtonsProps) {
  return (
    <div className="status-buttons">
      <Button variant="primary" isActive={state.visited} onClick={onToggleVisited}>
        {state.visited ? "已打卡" : "标记已打卡"}
      </Button>
      <Button isActive={state.wishlist} onClick={onToggleWishlist}>
        {state.wishlist ? "已加入想去" : "加入想去"}
      </Button>
      <Button isActive={state.favorite} onClick={onToggleFavorite}>
        {state.favorite ? "已收藏" : "收藏"}
      </Button>
    </div>
  );
}
