import { typeLabels } from "../../data/labels";
import type { SpotType } from "../../types/spot";
import { Button } from "../ui/Button";

const types = Object.keys(typeLabels) as SpotType[];

interface TypeFilterProps {
  selectedTypes: SpotType[];
  onToggle: (type: SpotType) => void;
}

export function TypeFilter({ selectedTypes, onToggle }: TypeFilterProps) {
  return (
    <div className="filter-group">
      <h3>类型</h3>
      <div className="chip-row">
        {types.map((type) => (
          <Button key={type} isActive={selectedTypes.includes(type)} onClick={() => onToggle(type)}>
            {typeLabels[type]}
          </Button>
        ))}
      </div>
    </div>
  );
}
