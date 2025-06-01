import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TavernMenuItems1.css';

import Sidebar from './section1/Sidebar';
import Header from './section1/Header';
import MenuCard from './section1/MenuCard';
import DescriptionSection from './section1/DescriptionSection';
import StockSection from './section1/StockSection';
import DetailSection from './section1/DetailSection';

export default function TavernMenuItems1() {
  const taverns = [
    { name: 'Goblin Gummy Worms', id: '$21', highlighted: false, image: '/images/GGW.png', route: '/MenuItems' },
    { name: 'Elven Nectar', id: '$23', highlighted: true, image: '/images/EN.png', route: null },
    { name: 'Wild Berries', id: '$24', highlighted: false, image: '/images/WB.png', route: null },
    { name: 'Whiskey', id: '$25', highlighted: false, image: '/images/W.png', route: null },
    { name: 'Mystic Mushroom Broth', id: '$26', highlighted: false, image: '/images/MMB.png', route: null }
  ];

  const navigate = useNavigate();

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
            <DetailSection />
          </div>
        </div>
      </div>
    </div>
  );
}
