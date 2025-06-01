import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TavernInventory.css';

import Sidebar from './section/Sidebar';
import Header from './section/Header';
import InventoryCard from './section/InventoryCard';
import DescriptionSection from './section/DescriptionSection';
import UsageSection from './section/UsageSection';

export default function TavernInventory() {
  const taverns = [
    { name: 'Ale', id: '1011', highlighted: true, image: '/images/Ale.png', route: null },
    { name: 'Whiskey', id: '1012', highlighted: false, image: '/images/Whiskey.png', route: '/inventory1' },
    { name: 'Cider', id: '1013', highlighted: false, image: '/images/Cider.png', route: null },
    { name: 'Healers Chicken Soup', id: '1014', highlighted: false, image: '/images/HealersChickenSoup.png', route: null },
    { name: 'Wild Berries', id: '1015', highlighted: false, image: '/images/WildBerries.png', route: null }
  ];

  const navigate = useNavigate();

  return (
    <div className="taverns-container">
      <Sidebar navigate={navigate} />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="page-title">Inventory Items</h1>
            <div className="taverns-grid">
              {taverns.map((tavern, index) => (
                <InventoryCard key={index} tavern={tavern} navigate={navigate} />
              ))}
            </div>
            <DescriptionSection />
          </div>
          <div className="right-content">
            <UsageSection />
          </div>
        </div>
      </div>
    </div>
  );
}
