import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ activeSection, setActiveSection, user, logout }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">~ {user?.displayName || 'Travel Diary'} </h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              onClick={() => setActiveSection("home")}
              className={activeSection === "home" ? "nav-link active" : "nav-link"}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveSection("memories")}
              className={activeSection === "memories" ? "nav-link active" : "nav-link"}
            >
              Memories
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveSection("upcoming")}
              className={activeSection === "upcoming" ? "nav-link active" : "nav-link"}
            >
              Upcoming
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveSection("profile")}
              className={activeSection === "profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </button>
          </li>

<li className="nav-item">
            <button
              onClick={() => setActiveSection("squad")}
              className={activeSection === "squad" ? "nav-link active" : "nav-link"}
            >
              Squad
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => setShowConfirm(true)} 
              className="nav-link logout"
              title="Logout"
            >
              {user?.email || 'user@example.com'}
            </button>
          </li>
        </ul>
      </div>
      {/* Logout Confirmation Modal */}
      {showConfirm && (
        <div className="logout-modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Logout Confirmation</h3>
            <p>Logout from <strong>{user?.email}</strong>?</p>
            <label className="confirm-checkbox">
              <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span>Confirm logout</span>
            </label>
            <div className="modal-buttons">
              <button 
                className="btn-cancel"
                onClick={() => {
                  setShowConfirm(false);
                  setIsChecked(false);
                }}
              >
                Cancel
              </button>
              <button 
                className="btn-logout"
                disabled={!isChecked}
                onClick={() => {
                  logout();
                  setShowConfirm(false);
                  setIsChecked(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
