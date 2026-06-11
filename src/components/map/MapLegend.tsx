export function MapLegend() {
  return (
    <div className="map-legend">
      <strong>图例</strong>
      <span>
        <i className="legend-dot legend-food" /> 餐饮 / 咖啡
      </span>
      <span>
        <i className="legend-dot legend-shop" /> 商店 / 作品相关
      </span>
      <span>
        <i className="legend-dot legend-scenic" /> 风景 / 神社 / 海边
      </span>
      <span>
        <i className="legend-dot legend-hotel" /> 酒店 / 交通
      </span>
    </div>
  );
}
