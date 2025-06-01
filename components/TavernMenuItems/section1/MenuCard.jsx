import React from 'react';

export default function MenuCard({ tavern, navigate }) {
  return (
    <div
      className={`tavern-card1 ${tavern.highlighted ? 'highlighted' : ''}`}
      onClick={() => tavern.route && navigate(tavern.route)}
      style={{ cursor: tavern.route ? 'pointer' : 'default' }}
    >
      <div className="tavern-info">
        <div className="MenuItemsImage">
          <img src={tavern.image} alt={tavern.name} className="MenuItems" />
        </div>
        <br />
        <div className="tavern-name">{tavern.name}</div>
        <div className="tavern-id">{tavern.id}</div>
      </div>
    </div>
  );
}
