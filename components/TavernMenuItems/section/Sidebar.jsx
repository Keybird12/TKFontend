// components/Sidebar.jsx
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  function logOut(){
    localStorage.clear();
    navigate('/login'); // Changed from '/dashboard' to '/login'
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div>
          <img src="/images/SidePanelImg.png" alt="Logo" className="logo-img" />
        </div>
      </div>
      <div className="sidebar-title">MENU</div>

      <div className="sidebar-menu">
        <div className="menu-item" onClick={() => navigate('/dashboard')}>
          <div className="menu-indicator-outline"></div>
          <span>Dashboard</span>
        </div>
        <div className="menu-item" onClick={() => navigate('/taverns')}>
          <div className="menu-indicator-outline"></div>
          <span>Taverns</span>
        </div>
        <div className="menu-item" onClick={() => navigate('/MenuItems')}>
          <div className="menu-icon dashboard-icon"></div>
          <span>Menu Items</span>
        </div>
        <div className="menu-item" onClick={() => navigate('/inventory')}>
          <div className="menu-indicator-outline"></div>
          <span>Inventory</span>
        </div>
      </div>

      <div className="logout-button" onClick={logOut}>
        <LogOut size={16} />
        <span>Logout</span>
      </div>
    </div>
  );
}