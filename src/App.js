import React, { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import UpcomingTreks from "./components/UpcomingTreks";
import Profile from "./components/Profile";

import TrekSquad from "./components/TrekSquad"; 

import './App.css';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { user, logout } = useAuth();

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} user={user} logout={logout} />
      
      {activeSection === "home" && (
        <>
          <Hero />
          <Story />
        </>
      )}
      
      {activeSection === "memories" && <Gallery />}
      
      {activeSection === "upcoming" && <UpcomingTreks />}
      {activeSection === "profile" && <Profile />}

      {activeSection === "squad" && <TrekSquad />}
    </div>
  );
};

function App() {
  const { user } = useAuth();
  return user ? <AppContent /> : <Auth />;
}

function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Root;
