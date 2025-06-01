// components/InventoryUsage.jsx
export default function InventoryUsage({ inventoryData }) {
  return (
    <div className="inventory-section">
      <h2 className="section-title">Inventory Usage</h2>
      <p className="date-range">From June 20, 2024 - December 1, 2024</p>
      <div className="bar-chart-container">
        {inventoryData.map((item) => (
          <div key={item.name} className="bar-chart-column">
            <div className="bar-duo">
              <div className="bar required" style={{ height: `${(item.required / 200) * 100}%` }}></div>
              <div className="bar actual" style={{ height: `${(item.actual / 200) * 100}%` }}></div>
            </div>
            <div className="bar-label">{item.name}</div>
          </div>
        ))}
        <div className="right-panel">
          <div><img src="/images/bg-Img.png" alt="Logo" className="Right-Image" /></div>
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item"><div className="legend-color blue"></div><span>Quantity Required</span></div>
        <div className="legend-item"><div className="legend-color gray"></div><span>Quantity</span></div>
      </div>
    </div>
  );
}
