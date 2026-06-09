import { layerLabels } from "../../data/labels";
import type { SpotLayer } from "../../types/spot";
import { Button } from "../ui/Button";

const layers = Object.keys(layerLabels) as SpotLayer[];

interface LayerFilterProps {
  selectedLayers: SpotLayer[];
  onToggle: (layer: SpotLayer) => void;
}

export function LayerFilter({ selectedLayers, onToggle }: LayerFilterProps) {
  return (
    <div className="filter-group">
      <h3>点位层级 / Layer</h3>
      <div className="chip-row">
        {layers.map((layer) => (
          <Button key={layer} isActive={selectedLayers.includes(layer)} onClick={() => onToggle(layer)}>
            {layerLabels[layer]}
          </Button>
        ))}
      </div>
    </div>
  );
}
