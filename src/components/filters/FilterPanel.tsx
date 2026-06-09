import { statusFilterLabels } from "../../data/labels";
import type { SpotFilters, SpotVisibilityMode, StatusFilter } from "../../utils/filters";
import { Button } from "../ui/Button";
import { AreaFilter } from "./AreaFilter";
import { CharacterFilter } from "./CharacterFilter";
import { LayerFilter } from "./LayerFilter";
import { TypeFilter } from "./TypeFilter";

const statuses = Object.keys(statusFilterLabels) as StatusFilter[];
const visibilityModes: Array<{ value: SpotVisibilityMode; label: string }> = [
  { value: "featured", label: "推荐巡礼点" },
  { value: "all_verified", label: "全部已校对点" },
  { value: "all", label: "全部点位" },
];

interface FilterPanelProps {
  filters: SpotFilters;
  onToggleArea: (area: SpotFilters["areas"][number]) => void;
  onToggleType: (type: SpotFilters["types"][number]) => void;
  onToggleLayer: (layer: SpotFilters["layers"][number]) => void;
  onToggleCharacter: (character: SpotFilters["characters"][number]) => void;
  onStatusChange: (status: StatusFilter) => void;
  onVisibilityModeChange: (visibilityMode: SpotVisibilityMode) => void;
  onClear: () => void;
}

export function FilterPanel({
  filters,
  onToggleArea,
  onToggleType,
  onToggleLayer,
  onToggleCharacter,
  onStatusChange,
  onVisibilityModeChange,
  onClear,
}: FilterPanelProps) {
  return (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <h2>筛选</h2>
        <Button variant="ghost" onClick={onClear}>
          清空
        </Button>
      </div>
      <div className="filter-group">
        <h3>显示范围</h3>
        <div className="chip-row">
          {visibilityModes.map((mode) => (
            <Button
              key={mode.value}
              isActive={filters.visibilityMode === mode.value}
              onClick={() => onVisibilityModeChange(mode.value)}
            >
              {mode.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h3>状态</h3>
        <div className="chip-row">
          {statuses.map((status) => (
            <Button key={status} isActive={filters.status === status} onClick={() => onStatusChange(status)}>
              {statusFilterLabels[status]}
            </Button>
          ))}
        </div>
      </div>
      <AreaFilter selectedAreas={filters.areas} onToggle={onToggleArea} />
      <TypeFilter selectedTypes={filters.types} onToggle={onToggleType} />
      <LayerFilter selectedLayers={filters.layers} onToggle={onToggleLayer} />
      <CharacterFilter selectedCharacters={filters.characters} onToggle={onToggleCharacter} />
    </div>
  );
}
