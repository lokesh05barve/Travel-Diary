import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isSignup) {
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>
      <div className="auth-card">
        <h1 className="auth-title">Travel Diary</h1>
        <p className="auth-subtitle">Preserve your adventure memories</p>
        <button 
          className="toggle-btn" 
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? 'Login' : 'Signup'}
        </button>
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? 'Loading...' : (isSignup ? 'Sign Up' : 'Login')}
          </button>
          {error && <div className="error-msg">{error}</div>}
        </form>
        <div className="watermark">
          Made by Lokesh Barve
        </div>
      </div>
    </div>
  );
};

export default Auth;
