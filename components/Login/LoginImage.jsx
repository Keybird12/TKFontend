import React from 'react';

const LoginImage = ({ src = "/images/bg-Img.png", alt = "Login Background" }) => {
  return (
    <div className="login-image-wrapper">
      <img src={src} alt={alt} className="login-image-section" />
    </div>
  );
};

export default LoginImage;