import React from 'react';

export default function UsageSection() {
  return (
    <div className="right-sidebar">
      <div className="usage-card">
        <h3 className="usage-title">Inventory Usage</h3>
        <div className="usage-subtitle">ITEMS</div>

        <div className="chart-container">
          <div className="chart-bar primary"></div>
          <div className="chart-value">70</div>
          <div className="chart-bar secondary">
            <div className="chart-value1">50</div>
          </div>
        </div>

        <div className="legend">
          <div className="legend-item">
            <div className="legend-dot blue"></div>
            <span className="legend-text">Quantity Required</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot gray"></div>
            <span className="legend-text">Quantity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
