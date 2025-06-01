// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import SignUp from './components/SignUp/SignUpPage';
import TavernDashboard from './components/TavernDashboard/TavernDashboard';
import TavernsPage from './components/TavernsPage/TavernsPage';
import TavernsPage1 from './components/TavernsPage/TavernsPage1';
import TavernMenuItems from './components/TavernMenuItems/TavernMenuItems';
import TavernMenuItems1 from './components/TavernMenuItems/TavernMenuItems1';
import TavernInventory from './components/TavernInventory/TavernInventory';
import TavernInventory1 from './components/TavernInventory/TavernInventory1';
import Protected from './Protected'; 

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <Protected>
            <TavernDashboard />
          </Protected>
        } />
        
        <Route path="/taverns" element={
          <Protected>
            <TavernsPage />
          </Protected>
        } />
        
        <Route path="/taverns/weary-wanderer" element={
          <Protected>
            <TavernsPage1 />
          </Protected>
        } />
        
        <Route path="/MenuItems" element={
          <Protected>
            <TavernMenuItems />
          </Protected>
        } />
        
        <Route path="/MenuItems1" element={
          <Protected>
            <TavernMenuItems1 />
          </Protected>
        } />
        
        <Route path="/inventory" element={
          <Protected>
            <TavernInventory />
          </Protected>
        } />
        
        <Route path="/inventory1" element={
          <Protected>
            <TavernInventory1 />
          </Protected>
        } />
      </Routes>
    </Router>
  );
}