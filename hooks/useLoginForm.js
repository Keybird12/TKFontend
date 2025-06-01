import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Basic validation (replace with real auth logic)
      if (username === 'admin' && password === '1234') {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  return {
    username,
    password,
    rememberMe,
    isLoading,
    error,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    handleRememberMeChange
  };
};