import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/login');
    }
  }, [navigate]);

  // Only render children if user is authenticated
  return localStorage.getItem('user-info') ? children : null;
}

export default Protected;