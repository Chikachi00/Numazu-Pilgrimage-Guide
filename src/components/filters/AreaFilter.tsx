import { areaLabels } from "../../data/labels";
import type { SpotArea } from "../../types/spot";
import { Button } from "../ui/Button";

const areas = Object.keys(areaLabels) as SpotArea[];

interface AreaFilterProps {
  selectedAreas: SpotArea[];
  onToggle: (area: SpotArea) => void;
}

export function AreaFilter({ selectedAreas, onToggle }: AreaFilterProps) {
  return (
    <div className="filter-group">
      <h3>区域</h3>
      <div className="chip-row">
        {areas.map((area) => (
          <Button key={area} isActive={selectedAreas.includes(area)} onClick={() => onToggle(area)}>
            {areaLabels[area]}
          </Button>
        ))}
      </div>
    </div>
  );
}
