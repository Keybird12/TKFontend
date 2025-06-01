// components/CustomerOrders.jsx
export default function CustomerOrders() {
  return (
    <div className="metric-card">
      <div className="orders-section">
        <h2 className="section-title">Customer Order Views</h2>
        <div className="orders-info">
          <div className="total-price">2.568</div>
          <div className="price-change">
            <span className="change-indicator">↑</span>
            <span className="change-percentage">2.1%</span>
            <span className="change-period">vs last week</span>
          </div>
          <br />
          <div className="orders-date">Sales from June 20 - December 01 2024</div>
        </div>

        <div className="orders-chart-container">
          <div className="orders-chart">
            <svg className="line-chart" viewBox="0 0 300 100">
              <polyline points="0,80 50,70 100,45 150,50 200,40 250,60 300,20" fill="none" stroke="#4f46e5" strokeWidth="2" />
              <polyline points="-5,40 30,80 100,90 150,70 200,100 250,50 500,20" fill="none" stroke="#000000" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className="chart-months">
            <span>June</span><span>July</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>

          <br />
          <div className="chart-legend">
            <div className="legend-item"><div className="legend-color current"></div><span>Current Total Price</span></div>
            <div className="legend-item"><div className="legend-color last-week"></div><span>Last Week Total Price</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
