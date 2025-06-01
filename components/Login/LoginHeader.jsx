import React from 'react';

const LoginHeader = ({ title = "Welcome", subtitle = "Enter your credentials to access your account" }) => {
  return (
    <div className="login-header">
      <h1 className="login-title">{title}</h1>
      <p className="login-subtitle">{subtitle}</p>
    </div>
  );
};

export default LoginHeader;