import React from 'react';

export default function DetailSection() {
  return (
    <div className="orders-section">
      <div className="orders-header">
        <h1 className="section-title">Details</h1>
        <span className="view-report">View Report</span>
      </div>

      <div className="orders-info">
        <div><span className="total-price">Price:</span> $23.00</div>
        <br />
        <div><span className="total-price">Available:</span> The Salty Sailor</div>
        <br />
        <div>
          <span className="total-price">Ingredients:</span> White Tea, Honey Syrup, Elderflower Liqueur, Gin, Orange Blossom Water.
        </div>
      </div>
    </div>
  );
}
