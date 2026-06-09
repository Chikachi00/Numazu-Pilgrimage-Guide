import { statusFilterLabels } from "../../data/labels";
import type { SpotFilters, StatusFilter } from "../../utils/filters";
import { Button } from "../ui/Button";
import { AreaFilter } from "./AreaFilter";
import { CharacterFilter } from "./CharacterFilter";
import { TypeFilter } from "./TypeFilter";

const statuses = Object.keys(statusFilterLabels) as StatusFilter[];

interface FilterPanelProps {
  filters: SpotFilters;
  onToggleArea: (area: SpotFilters["areas"][number]) => void;
  onToggleType: (type: SpotFilters["types"][number]) => void;
  onToggleCharacter: (character: SpotFilters["characters"][number]) => void;
  onStatusChange: (status: StatusFilter) => void;
  onClear: () => void;
}

export function FilterPanel({
  filters,
  onToggleArea,
  onToggleType,
  onToggleCharacter,
  onStatusChange,
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
        <h3>状态</h3>
        <div className="chip-row">
          {statuses.map((status) => (
            <Button
              key={status}
              isActive={filters.status === status}
              onClick={() => onStatusChange(status)}
            >
              {statusFilterLabels[status]}
            </Button>
          ))}
        </div>
      </div>
      <AreaFilter selectedAreas={filters.areas} onToggle={onToggleArea} />
      <TypeFilter selectedTypes={filters.types} onToggle={onToggleType} />
      <CharacterFilter selectedCharacters={filters.characters} onToggle={onToggleCharacter} />
    </div>
  );
}
