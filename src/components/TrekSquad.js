import React from 'react';
import './TrekSquad.css';

const TrekSquad = () => {
  const members = [ 
    { id: '1', name: 'Lokesh Barve', role: 'Team Leader', Fact: 'The one who turned a simple plan into an unforgettable journey!', photo: '/WhatsApp Image 2026-04-09 at 12.30.35 PM.jpeg' },
    { id: '2', name: 'Aditya Yende', role: 'Entertainer', Fact: 'Kept everyone motivated and never let the vibe go down!', photo: '/WhatsApp Image 2026-04-09 at 12.26.48 PM.jpeg' },
    { id: '3', name: 'Soham Kale', role: 'Quietly Enjoyed', Fact: 'Quiet Throughout,but enjoyed every moment silently!', photo: '/WhatsApp Image 2026-04-09 at 12.30.30 PM.jpeg' },
    { id: '4', name: 'Arpit kharwade', role: 'The Vlogger', Fact: 'Captured every moment so we could relive the trek again and again!', photo: '/WhatsApp Image 2026-04-09 at 12.37.02 PM.jpeg' },
    { id: '5', name: 'Ansh Nandanwar', role: 'The Editor', Fact: 'Always ahead, both going up and coming down!', photo: '/WhatsApp Image 2026-04-09 at 12.35.31 PM.jpeg' },
    { id: '6', name: 'Ethan Anthony', role: 'Vibe Setter', Fact: "Said 'I cant do this !',but still made it to the top", photo: '/WhatsApp Image 2026-04-09 at 12.38.18 PM.jpeg'},
    { id: '7', name: 'Ayush Ahale', role: 'Little Foodie', Fact: 'Brings energy and fun wherever we go !', photo: '/WhatsApp Image 2026-04-09 at 12.35.30 PM.jpeg' }
  ];

  return (
    <section className="trek-squad">
      <div className="squad-container">
        <header className="squad-header">
          <h1 className="squad-title">Kalsubai Trek Squad</h1>
          <p className="squad-subtitle">Meet the unstoppable team that conquered the peak together!</p>
        </header>

        <div className="profile-grid">
          {members.map((member) => (
            <div key={member.id} className="profile-card">
              <div className="member-avatar">
                <img src={member.photo} alt={member.name} loading="lazy" />
              </div>
              <h2>Member Info</h2>
              <div className="profile-detail">
                <strong>Name:</strong> {member.name}
              </div>
              <div className="profile-detail">
                <strong>Role:</strong> {member.role}
              </div>
              <h2>Fact :</h2>
              <p>{member.Fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekSquad;

