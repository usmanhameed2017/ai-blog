import React from 'react';
import '../css/Section.css'; // Import the CSS file for styling

function Section() {
  return (
    <section className="sticker-section">
      <div className="sticker-container">
        <div className="sticker-item sticker1">
          <span className="sticker-text">AI - The Future Is Here!</span>
        </div>
        <div className="sticker-item sticker2">
          <span className="sticker-text">Revolutionizing Healthcare & More</span>
        </div>
        <div className="sticker-item sticker3">
          <span className="sticker-text">Autonomous Cars, Smart Cities</span>
        </div>
      </div>
    </section>
  );
}

export default Section;
