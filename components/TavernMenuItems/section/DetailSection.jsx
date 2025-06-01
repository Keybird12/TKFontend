import React, { useState } from 'react';
import ProductManagementModal from './ProductManagementModal';

export default function DetailSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const currentProduct = {
    name: 'Goblin Gummy Worms',
    id: '$21',
    image: '/images/GGW.png'
  };

  const handleProductManagementClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="orders-section">
        <div className="orders-header">
          <h1 className="section-title">Details</h1>
          <span 
            className="view-report" 
            style={{ cursor: 'pointer' }}
            onClick={handleProductManagementClick}
          >
            Product Management
          </span>
        </div>

        <div className="orders-info">
          <div><span className="total-price">Price:</span> $21.00</div>
          <br />
          <div><span className="total-price">Available:</span> The Salty Sailor</div>
          <br />
          <div>
            <span className="total-price">Ingredients:</span> Base, Gelatin, Corn Starch, Acidity Regulators, Flavor and Color.
          </div>
        </div>
      </div>

      <ProductManagementModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={currentProduct}
      />
    </>
  );
}