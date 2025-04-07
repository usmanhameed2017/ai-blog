import React from 'react';
import { FaCar, FaTools, FaTrafficLight, FaBatteryFull } from 'react-icons/fa'; // Automotive icons
import '../css/Automotive.css'; // Custom Automotive CSS file

function AutomotiveSection() {
  return (
    <section className="automotive-section">
      <div className="section-header">
        <FaCar className="section-icon" /> {/* Large automotive icon */}
        <h2 className="section-title">AI in Automotive</h2>
      </div>

      <div className="cards-container">
        {/* Card for Self-driving Technology */}
        <div className="card">
          <FaTrafficLight className="card-icon" />
          <h3 className="card-title">Self-Driving Tech</h3>
          <p className="card-description">
            AI powers autonomous vehicles, enabling them to detect traffic signs, obstacles, and safely navigate roads.
          </p>
        </div>

        {/* Card for Predictive Maintenance */}
        <div className="card">
          <FaTools className="card-icon" />
          <h3 className="card-title">Predictive Maintenance</h3>
          <p className="card-description">
            AI analyzes vehicle data to predict failures before they happen, reducing downtime and repair costs.
          </p>
        </div>

        {/* Card for Energy Efficiency */}
        <div className="card">
          <FaBatteryFull className="card-icon" />
          <h3 className="card-title">Energy Optimization</h3>
          <p className="card-description">
            AI improves battery management and energy efficiency in electric vehicles for better performance.
          </p>
        </div>

        {/* Card for Driver Assistance */}
        <div className="card">
          <FaCar className="card-icon" />
          <h3 className="card-title">Driver Assistance</h3>
          <p className="card-description">
            AI enhances safety with real-time alerts, adaptive cruise control, and lane-keeping support for drivers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AutomotiveSection;