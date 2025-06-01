import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TavernMenuItems.css';

import Sidebar from './section/Sidebar';
import Header from './section/Header';
import MenuCard from './section/MenuCard';
import DescriptionSection from './section/DescriptionSection';
import StockSection from './section/StockSection';
import DetailSection from './section/DetailSection';
import ProductManagementModal from './section/ProductManagementModal';

export default function TavernMenuItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const taverns = [
    { name: 'Goblin Gummy Worms', id: '$21', highlighted: true, image: '/images/GGW.png', route: null },
    { name: 'Elven Nectar', id: '$23', highlighted: false, image: '/images/EN.png', route: '/MenuItems1' },
    { name: 'Wild Berries', id: '$24', highlighted: false, image: '/images/WB.png', route: null },
    { name: 'Whiskey', id: '$25', highlighted: false, image: '/images/W.png', route: null },
    { name: 'Mystic Mushroom Broth', id: '$26', highlighted: false, image: '/images/MMB.png', route: null }
  ];

  const navigate = useNavigate();

  const handleProductManagementClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="taverns-container">
      <Sidebar navigate={navigate} />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="page-title">Menu Items</h1>
            <div className="taverns-grid">
              {taverns.map((tavern, index) => (
                <MenuCard key={index} tavern={tavern} navigate={navigate} />
              ))}
            </div>
            <DescriptionSection />
          </div>
          <div className="right-content">
            <StockSection />
            <DetailSection onProductManagementClick={() => handleProductManagementClick(taverns[0])} />
          </div>
        </div>
      </div>

      <ProductManagementModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}