import React from 'react';

export default function StockSection() {
  return (
    <div className="reputation-section">
      <h2 className="section-title">Stock Available</h2>
      <div className="reputation-default">Food</div>

      <div className="reputation-chart-container">
        <div className="reputation-chart">
          <div className="reputation-progress"></div>
          <div className="reputation-center">
            <div className="reputation-percentage">100</div>
            <div className="reputation-label">Quantity Required</div>
          </div>
        </div>

        <div className="reputation-tooltip">
          <div className="tooltip-content">
            30 Stocks
            <div className="tooltip-subtitle">Elven Nectar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
