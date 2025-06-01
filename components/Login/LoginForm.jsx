import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({
  username,
  Password,
  rememberMe,
  onUsernameChange,
  onPasswordChange,
  onRememberMeChange,
  onSubmit
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault(); // Prevent form submission
    
    // Clear previous errors
    setError("");
    
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (!email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    try {
      console.warn(email, password);
      let item = { email, password };
      
      let result = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });
      
      let data = await result.json();
      
      // Check if the response contains an error
      if (data.error || !result.ok) {
        setError(data.error || "Login failed. Please try again.");
        setLoading(false);
        return;
      }
      
      // Check if user data is valid (has required fields)
      if (!data.id || !data.email) {
        setError("Invalid response from server");
        setLoading(false);
        return;
      }
      
      // Only store user info and navigate if login is successful
      localStorage.setItem("user-info", JSON.stringify(data));
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="login-form">
      {error && (
        <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>
          {error}
        </div>
      )}
      
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          id="username"
          className="form-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-options">
        <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={onRememberMeChange}
            className="remember-checkbox"
          />
          <label htmlFor="remember" className="remember-label">Remember Me</label>
        </div>
        <a
          href="#"
          className="forgot-password"
          onClick={() => navigate('/signup')}
        >
          Not Yet Admin
        </a>
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Enter to Proceed"}
      </button>
    </form>
  );
};

export default LoginForm;