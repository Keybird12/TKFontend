// src/components/SignUpPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

export default function SignUpPage() {

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  }, []); 

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!fullname || !email || !password || !retryPassword) {
      alert('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (password !== retryPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // API call to register user
      let item = {
        name: fullname, // Using fullname for the name field
        password,
        email
      };

      console.log('Registering user:', item);

      let result = await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      result = await result.json();
      console.log('Registration successful:', result);

      // Store user info in localStorage
      localStorage.setItem("user-info", JSON.stringify(result));

      // Navigate to dashboard or login after successful registration
      navigate('/dashboard');

    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-section">
          <h1 className="login-title">Sign Up</h1>
          <p className="login-subtitle">Create your account to get started</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">Full Name:</label>
              <input
                type="text"
                id="fullname"
                className="form-input"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="retryPassword" className="form-label">Re-type Password:</label>
              <input
                type="password"
                id="retryPassword"
                className="form-input"
                placeholder="Re-type Password"
                value={retryPassword}
                onChange={(e) => setRetryPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="form-options">
              <a href="#" className="forgot-password" onClick={() => navigate('/')}>Already have account?</a>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}