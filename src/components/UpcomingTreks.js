import React from "react";
import "./UpcomingTreks.css";

function UpcomingTreks() {
const upcomingTreks = [
    {
      id: 1,
      name: "Kedarkantha Trek",
      image: "kedarkantha-Trek.jpg",
      date: "Late December, 2026",
      difficulty: "Medium",
      location: "Govind Wildlife Sanctuary, Uttarakhand",
      description: "Iconic winter trek featuring thrilling summit views, frozen Juda Falls lake, pine forests, and high-altitude meadows."
    }
  ];

  return (
    <section className="upcoming-treks">
      <div className="upcoming-container">
        <h2>Upcoming Trek 🗺️</h2>
        <p className="subtitle">Join us for more adventures!</p>
        <div className="announcement">
          <p>🚀 Our group is planning an epic <strong>Kedarkantha Trek</strong> in late December 2026! Join the adventure! 🚀</p>
        </div>
        
        <div className="treks-grid">
          {upcomingTreks.map((trek) => (
            <div key={trek.id} className="trek-card">
              <div className="trek-image">
                <img src="/kedarkantha-Trek.jpg" alt={trek.name} />
              </div>
              <div className="trek-content">
                <h3>{trek.name}</h3>
                <div className="trek-details">
                  <p><strong>📅 Date:</strong> {trek.date}</p>
                  <p><strong>📍 Location:</strong> {trek.location}</p>
                  <p><strong>💪 Difficulty:</strong> <span className={`difficulty ${trek.difficulty.toLowerCase()}`}>{trek.difficulty}</span></p>
                </div>
                <div className="detailed-description">
                  <p>Kedarkantha Trek (12,500 ft) is a winter wonderland dream! Witness breathtaking snow-capped peaks, frozen Juda Falls turning into a natural ice rink, dense pine forests whispering secrets, vast meadows glowing under starlit skies. Perfect for thrill-seekers – steep ascents, thrilling ridge walks, cozy campsites by campfires sharing trek tales. Spot Himalayan wildlife, feel the pure mountain air, and conquer the panoramic 360° summit view that stays etched forever. Our group vibe makes it unforgettable!</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingTreks;
