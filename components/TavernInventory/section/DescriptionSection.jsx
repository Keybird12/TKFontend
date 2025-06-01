import React from 'react';

export default function DescriptionSection() {
  return (
    <div className="description-section">
      <h3 className="section-title">Description</h3>
      <div className="description-content">
        <div className="description-image">
          <img src="/images/AleDescription.png" alt="Product" className="ProductImage" />
        </div>
        <div className="description-text">
          <p>
            A crisp, golden pour with a frothy head—our ale is brewed for those who appreciate rich flavor and smooth refreshment.
            Whether you're unwinding after a long day or celebrating with friends, every sip delivers the perfect balance of tradition and taste.
          </p>
        </div>
      </div>
    </div>
  );
}
