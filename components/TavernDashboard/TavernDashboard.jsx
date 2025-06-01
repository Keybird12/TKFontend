// src/components/TavernDashboard/TavernDashboard.jsx
import './TavernDashboard.css';
import Sidebar from './sections/Sidebar';
import Header from './sections/Header';
import InventoryUsage from './sections/InventoryUsage';
import OverallRating from './sections/OverallRating';
import HighSpenders from './sections/HighSpenders';
import CustomerOrders from './sections/CustomerOrders';

export default function TavernDashboard() {
  const inventoryData = [
    { name: 'Wheat', required: 180, actual: 120 },
    { name: 'Barley', required: 190, actual: 100 },
    { name: 'Hops / Grapes', required: 175, actual: 95 },
    { name: 'Yeast', required: 170, actual: 85 },
    { name: 'Oak', required: 165, actual: 70 },
  ];

  const highSpenders = [
    { name: 'Yor', amount: '$81.00', image: '/images/yor.png' },
    { name: 'Franky', amount: '$26.00', image: '/images/Franky.png' },
    { name: 'Yuri', amount: '$25.00', image: '/images/Yuri.png' },
    { name: 'Fiona', amount: '$24.00', image: '/images/Fiona.png' },
    { name: 'Loid', amount: '$23.00', image: '/images/Loid.png' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1 className="dashboard-title">Dashboard</h1>
          <InventoryUsage inventoryData={inventoryData} />
          <div className="metrics-container">
            <OverallRating />
            <HighSpenders highSpenders={highSpenders} />
            <CustomerOrders />
          </div>
        </div>
      </div>
    </div>
  );
}
