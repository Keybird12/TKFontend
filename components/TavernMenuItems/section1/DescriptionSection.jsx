import React from 'react';

export default function DescriptionSection() {
  return (
    <div className="description-section">
      <h3 className="section-title">Description</h3>
      <div className="description-content">
        <img src="/images/EN.png" alt="Elven Nectar" className="ProductImage1" />
        <p className="description-text">
          <span className="product-name">Elven Nectar</span> is a magical beverage, pale golden in hue and sweet with floral notes.
          Its invigorating blend of sweet nectar and mystical herbs is rumored to have healing properties and offer a boost of energy and focus.
          A taste of springtime in a glass.
        </p>
      </div>
    </div>
  );
}
