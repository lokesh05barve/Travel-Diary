import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-container">
        <h1 className="profile-title">About Me</h1>
        
        <div className="profile-grid">
          <div className="profile-card">
            <h2>Personal Info</h2>
            <div className="profile-detail">
              <strong>Name:</strong> Lokesh Manoj Barve
            </div>
            <div className="profile-detail">
              <strong>Age:</strong> 20
            </div>
            <div className="profile-detail">
              <strong>Location:</strong> Nagpur, Maharashtra
            </div>
            <div className="profile-detail">
              <strong>Occupation:</strong> Engineering Student 
            </div>
          </div>

          <div className="profile-card">
            <h2>Contact</h2>
            <div className="profile-detail">
              <strong>Email:</strong> lokeshbarve0502@gmail.com
            </div>
            <div className="profile-detail">
              <strong>Phone:</strong> +91-8390062332
            </div>
            <div className="profile-detail">
              <strong>Instagram:</strong> @lokesh_barve
            </div>
            <div className="profile-detail">
              <strong>Address:</strong> Koshtipura , Sitabuldi Nagpur , 440012
            </div>
          </div>

          <div className="profile-card">
            <h2>Education</h2>
            <div className="profile-detail">
              <strong>College Name:</strong> St. Vincent Pallotti College of Engineering and Technology, Nagpur
            </div>
            <div className="profile-detail">
              <strong>Branch:</strong> Computer Science and Engineering
            </div>
            <div className="profile-detail">
              <strong>Year:</strong> 2nd Year
            </div>
            <div className="profile-detail">
              <strong>UID:</strong> 24003039
            </div>
          </div>

          <div className="profile-card full">
            <h2>Bio</h2>
            <p>
            I live for the thrill of the open road and the discovery of hidden gems in every corner of the world. My heart belongs to the mountains and new horizons, always seeking the next adventure that turns a map into a memory. To me, traveling is more than a hobby; it is a way of life that fuels my soul and keeps me constantly exploring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

