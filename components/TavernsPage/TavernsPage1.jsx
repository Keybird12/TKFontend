import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TavernsPage1.css';

import Sidebar from './section1/Sidebar';
import Header from './section1/Header';
import TavernCard from './section1/TavernCard';
import LocationSection from './section1/LocationSection';
import ReputationSection from './section1/ReputationSection';
import OrdersSection from './section1/OrdersSection';

export default function TavernsPage1() {
  const taverns = [
    { name: 'The Salty Sailor', id: '920.ID', highlighted: false, image: '/images/salty-sailor.png', route: '/taverns' },
    { name: 'The Weary Wanderer', id: '923.ID', highlighted: true, image: '/images/weary-wanderer.png', route: null },
    { name: 'The Busted Bottle', id: '924.ID', highlighted: false, image: '/images/busted-bottle.png', route: null },
    { name: 'The Mystic Tavern', id: '921.ID', highlighted: false, image: '/images/mystic-tavern.png', route: null },
    { name: 'The Golden Serpent', id: '922.ID', highlighted: false, image: '/images/golden-serpent.png', route: null }
  ];

  const weekDays = [15, 16, 17, 18, 19, 20];
  const navigate = useNavigate();

  return (
    <div className="taverns-container">
      <Sidebar navigate={navigate} />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="page-title">Taverns</h1>
            <div className="taverns-grid">
              {taverns.map((tavern, index) => (
                <TavernCard key={index} tavern={tavern} navigate={navigate} />
              ))}
            </div>
            <LocationSection />
          </div>
          <div className="right-content">
            <ReputationSection />
            <OrdersSection weekDays={weekDays} />
          </div>
        </div>
      </div>
    </div>
  );
}
