import React from 'react';

export default function DescriptionSection() {
  return (
    <div className="description-section">
      <h3 className="section-title">Description</h3>
      <div className="description-content">
        <div className="description-image">
          <img src="/images/Whiskey1.png" alt="Product" className="ProductImage" />
        </div>
        <div className="description-text">
          <p>
            Discover a rich selection of whiskeys, from smooth bourbons to bold Scotches. Whether you enjoy it neat, on the rocks,
            or in a crafted cocktail, every bottle tells a story of tradition and taste. Raise your glass and savor the moment.
          </p>
        </div>
      </div>
    </div>
  );
}
