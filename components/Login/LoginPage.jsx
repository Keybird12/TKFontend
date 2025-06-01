import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginImage from './LoginImage';
import { useLoginForm } from '../../hooks/useLoginForm';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    username,
    password,
    rememberMe,
    isLoading,
    error,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    handleRememberMeChange
  } = useLoginForm();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form-section">
          <LoginHeader />
          
          {error && <div className="error-message">{error}</div>}
          
          <LoginForm
            username={username}
            password={password}
            rememberMe={rememberMe}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
            onRememberMeChange={handleRememberMeChange}
            onSubmit={handleSubmit}
            onSignUpClick={handleSignUpClick}
            disabled={isLoading}
          />
        </div>
      </div>
      <LoginImage />
    </div>
  );
}