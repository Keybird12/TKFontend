import React from 'react';

export default function TavernCard({ tavern, navigate }) {
  return (
    <div
      className={`tavern-card ${tavern.highlighted ? 'highlighted' : ''}`}
      onClick={() => tavern.route && navigate(tavern.route)}
      style={{ cursor: tavern.route ? 'pointer' : 'default' }}
    >
      <div className="tavern-info">
        <div className="ProfileContainer">
          <img src={tavern.image} alt={tavern.name} className="ProfileTaverns" />
        </div>
        <br />
        <div className="tavern-name">{tavern.name}</div>
        <div className="tavern-id">{tavern.id}</div>
      </div>
    </div>
  );
}
