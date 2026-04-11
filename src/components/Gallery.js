import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "WhatsApp Image 2026-04-09 at 12.34.26 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.40.57 PM.jpeg",
    "top.jpeg",
    "WhatsApp Image 2026-04-09 at 12.26.48 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.30.30 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.30.35 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.35.30 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.35.31 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.37.02 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.38.18 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.00.30 PM.jpeg",
    "WhatsApp Image 2026-04-09 at 12.11.35 PM.jpeg"
  ];

  return (
    <div className="gallery">
      <h2>Our Memories</h2>
      <div className="grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="trek" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;