// 📁 TavernsPage/section/ReputationSection.jsx
import React from 'react';

export default function ReputationSection() {
  return (
    <div className="reputation-section">
      <h2 className="section-title">Reputation Level</h2>
      <div className="reputation-default">Default</div>

      <div className="reputation-chart-container">
        <div className="reputation-chart">
          <div className="reputation-progress"></div>
          <div className="reputation-center">
            <div className="reputation-percentage">92%</div>
            <div className="reputation-label">Progress</div>
          </div>
        </div>

        <div className="reputation-tooltip">
          <div className="tooltip-content">
            Level 31
            <div className="tooltip-subtitle">The Salty Sailor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
