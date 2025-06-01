// 📁 TavernsPage/TavernsPage.jsx
import React from 'react';
import Sidebar from './section/Sidebar';
import Header from './section/Header';
import TavernCard from './section/TavernCard';
import LocationSection from './section/LocationSection';
import ReputationSection from './section/ReputationSection';
import OrdersSection from './section/OrdersSection';
import './TavernsPage.css';
import { useNavigate } from 'react-router-dom';

export default function TavernsPage() {
  const taverns = [
    { name: 'The Salty Sailor', id: '920.ID', highlighted: true, image: '/images/salty-sailor.png', route: null },
    { name: 'The Weary Wanderer', id: '923.ID', highlighted: false, image: '/images/weary-wanderer.png', route: '/taverns/weary-wanderer' },
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
