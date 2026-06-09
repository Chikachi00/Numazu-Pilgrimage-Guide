import { Button } from "../ui/Button";

interface FilterToggleButtonProps {
  activeCount: number;
  onClick: () => void;
}

export function FilterToggleButton({ activeCount, onClick }: FilterToggleButtonProps) {
  return (
    <Button className="map-control-button" onClick={onClick} aria-label="打开筛选面板">
      <span aria-hidden="true">☰</span>
      筛选
      {activeCount > 0 ? <span className="control-badge">{activeCount}</span> : null}
    </Button>
  );
}
