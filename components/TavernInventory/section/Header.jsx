import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  return (
    <div className="header">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="user-section">
        <div className="user-profile">
          <div className="user-avatar"></div>
          <span className="username">{user.name}</span>
          <ChevronDown size={16} />
          <Bell size={20} />
        </div>
      </div>
    </div>
  );
}
