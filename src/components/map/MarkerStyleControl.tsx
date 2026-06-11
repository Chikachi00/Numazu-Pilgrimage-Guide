import type { MarkerCategory, MarkerCategoryOverrides, MarkerIconName, MarkerMode } from "../../types/map";
import { markerCategoryLabels, markerCategoryOrder } from "../../utils/markerCategory";
import { defaultCategoryIcons, markerIconLabels, markerIconOptions } from "../../utils/markerIcons";
import { Button } from "../ui/Button";

interface MarkerStyleControlProps {
  mode: MarkerMode;
  categoryOverrides: MarkerCategoryOverrides;
  isOpen: boolean;
  onToggleOpen: () => void;
  onModeChange: (mode: MarkerMode) => void;
  onCategoryIconChange: (category: MarkerCategory, icon: MarkerIconName) => void;
  onReset: () => void;
}

export function MarkerStyleControl({
  mode,
  categoryOverrides,
  isOpen,
  onToggleOpen,
  onModeChange,
  onCategoryIconChange,
  onReset,
}: MarkerStyleControlProps) {
  return (
    <div className="marker-style-control">
      <Button className="map-control-button" onClick={onToggleOpen} aria-label="选择地图 marker 图标">
        <span aria-hidden="true">⌖</span>
        图标
      </Button>
      {isOpen ? (
        <div className="marker-style-menu marker-icon-menu" role="dialog" aria-label="Marker icons">
          <span className="marker-style-current">Marker 图标</span>
          <div className="marker-mode-row" role="radiogroup" aria-label="Marker mode">
            <button
              className={mode === "category_icon" ? "is-active" : ""}
              type="button"
              role="radio"
              aria-checked={mode === "category_icon"}
              onClick={() => onModeChange("category_icon")}
            >
              分类图标
            </button>
            <button
              className={mode === "custom_icon" ? "is-active" : ""}
              type="button"
              role="radio"
              aria-checked={mode === "custom_icon"}
              onClick={() => onModeChange("custom_icon")}
            >
              自定义图标
            </button>
          </div>

          {mode === "custom_icon" ? (
            <div className="marker-custom-grid">
              {markerCategoryOrder.map((category) => (
                <label key={category} className="marker-custom-row">
                  <span>{markerCategoryLabels[category]}</span>
                  <select
                    value={categoryOverrides[category] ?? defaultCategoryIcons[category]}
                    onChange={(event) => onCategoryIconChange(category, event.target.value as MarkerIconName)}
                  >
                    {markerIconOptions.map((iconName) => (
                      <option key={iconName} value={iconName}>
                        {markerIconLabels[iconName]}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
              <Button className="marker-reset-button" variant="ghost" onClick={onReset}>
                恢复默认
              </Button>
            </div>
          ) : (
            <p className="marker-menu-note">按地点类别自动显示餐厅、咖啡、商店、酒店、神社、海边等图标。</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
