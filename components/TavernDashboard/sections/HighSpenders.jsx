// components/HighSpenders.jsx
export default function HighSpenders({ highSpenders }) {
  return (
    <div className="metric-card">
      <h2 className="section-title">High Spender Customer</h2>
      <p className="section-subtitle">Adipiscing elit, sed do eiusmod tempor</p>
      <div className="spenders-list">
        {highSpenders.map((spender, index) => (
          <div key={index} className="spender-item">
            <div className="spender-profile">
              <div className="spender-avatar">
                <div><img src={spender.image} alt={spender.name} className="avatar-yor" /></div>
              </div>
              <span>{spender.name}</span>
            </div>
            <span>{spender.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
