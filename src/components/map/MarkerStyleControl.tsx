import type { MarkerStyleMode } from "../../types/map";
import { Button } from "../ui/Button";

const markerStyleOptions: Array<{ value: MarkerStyleMode; label: string }> = [
  { value: "layer_color", label: "按类型颜色" },
  { value: "minimal_dot", label: "极简圆点" },
  { value: "numbered", label: "数字标记" },
  { value: "aqours_inspired", label: "海边主题" },
];

interface MarkerStyleControlProps {
  value: MarkerStyleMode;
  isOpen: boolean;
  onToggleOpen: () => void;
  onChange: (value: MarkerStyleMode) => void;
}

export function MarkerStyleControl({ value, isOpen, onToggleOpen, onChange }: MarkerStyleControlProps) {
  const activeLabel = markerStyleOptions.find((option) => option.value === value)?.label ?? "样式";

  return (
    <div className="marker-style-control">
      <Button className="map-control-button" onClick={onToggleOpen} aria-label="选择地图 marker 样式">
        <span aria-hidden="true">◆</span>
        样式
      </Button>
      {isOpen ? (
        <div className="marker-style-menu" role="menu" aria-label="Marker style">
          <span className="marker-style-current">当前：{activeLabel}</span>
          {markerStyleOptions.map((option) => (
            <button
              key={option.value}
              className={option.value === value ? "is-active" : ""}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === value}
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
