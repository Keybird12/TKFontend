// components/OverallRating.jsx
export default function OverallRating() {
  return (
    <div className="metric-card">
      <h2 className="section-title">Overall Rating</h2>
      <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur</p>
      <div className="rating-circles">
        <div className="circle orange">
          <div className="circle-content">
            <div className="circle-value">73%</div>
            <div className="circle-label">Reputation Level</div>
          </div>
        </div>
        <div className="circle purple">
          <div className="circle-content">
            <div className="circle-value">99%</div>
            <div className="circle-label">Staff Reliability</div>
          </div>
        </div>
        <div className="circle cyan">
          <div className="circle-content">
            <div className="circle-value">89%</div>
            <div className="circle-label">Customer Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
