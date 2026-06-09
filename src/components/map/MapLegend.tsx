export function MapLegend() {
  return (
    <div className="map-legend">
      <strong>图例</strong>
      <span>
        <i className="legend-dot legend-priority-1" /> 优先级 1
      </span>
      <span>
        <i className="legend-dot legend-priority-2" /> 优先级 2
      </span>
      <span>
        <i className="legend-dot legend-priority-3" /> 优先级 3
      </span>
    </div>
  );
}
