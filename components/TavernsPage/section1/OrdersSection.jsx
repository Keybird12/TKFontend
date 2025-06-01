import React from 'react';

export default function OrdersSection({ weekDays }) {
  return (
    <div className="orders-section">
      <div className="orders-header">
        <h2 className="section-title">Orders</h2>
      </div>

      <div className="orders-info">
        <div className="total-price">Total Price</div>
        <div className="price-change">
          <span className="change-indicator">↑</span>
          <span className="change-percentage">2.5%</span>
          <span className="change-period">vs last week</span>
        </div>
        <div className="orders-date">Orders from 20 June, 2024</div>
      </div>

      <div className="orders-chart-container">
        <div className="orders-chart">
          <svg className="line-chart" viewBox="0 0 300 100">
            <polyline
              points="0,80 50,70 100,45 150,50 200,40 250,60 300,20"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2"
            />
            <polyline
              points="-2,70 30,40 100,80 150,70 200,60 250,50 500,20"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <div className="chart-days">
          {weekDays.map((day, index) => (
            <div key={index} className="day-label">{day}</div>
          ))}
        </div>

        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color current"></div>
            <span>Current Total Price</span>
          </div>
          <div className="legend-item">
            <div className="legend-color last-week"></div>
            <span>Last Week Total Price</span>
          </div>
        </div>
      </div>
    </div>
  );
}
