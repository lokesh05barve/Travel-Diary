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

  const handleNavClick = (section) => {
    alert(`Access ${section} after login!`);
  };

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
    <div className="auth-page">
      {/* Header/Nav */}
      <nav className="auth-navbar">
        <div className="auth-navbar-container">
          <h1 className="auth-navbar-logo">✈️ Travel Diary</h1>
          <ul className="auth-nav-menu">
            <li className="auth-nav-item">
              <button onClick={() => handleNavClick('Home')} className="auth-nav-link">
                Home
              </button>
            </li>
            <li className="auth-nav-item">
              <button onClick={() => handleNavClick('About')} className="auth-nav-link">
                About
              </button>
            </li>
            <li className="auth-nav-item">
              <button className="auth-nav-link active">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="auth-hero">
        <div className="particles-bg"></div>
        <div className="hero-overlay">
          <h1>Welcome to Travel Diary</h1>
          <p>Preserve your adventure memories forever</p>
        </div>
      </section>

      {/* Auth Form Main */}
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-card-glow"></div>
            <h2 className="auth-form-title">{isSignup ? 'Join the Adventure' : 'Continue Your Journey'}</h2>
            <div className="toggle-container">
              <button 
                className={`toggle-btn ${isSignup ? 'active' : ''}`} 
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
              <button 
                className={`toggle-btn ${!isSignup ? 'active' : ''}`} 
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              {isSignup && (
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input"
                    required
                  />
                </div>
              )}
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <button type="submit" disabled={loading} className="auth-submit">
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  isSignup ? 'Start Adventure' : 'Enter Diary'
                )}
              </button>
              {error && <div className="error-msg">{error}</div>}
            </form>
            <p className="auth-hint">Secure • Fast • Reliable</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="auth-footer">
        <div className="wave"></div>
        <p>&copy; 2024 Travel Diary. Explore • Capture • Share</p>
      </footer>
    </div>
  );
};

export default Auth;

