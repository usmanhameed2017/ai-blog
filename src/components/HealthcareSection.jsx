import React from 'react';
import { FaFlask, FaHeartbeat, FaRobot, FaStethoscope, FaUserMd } from 'react-icons/fa'; // Importing some icons for healthcare
import "../css/HealthcareSection.css";

function HealthcareSection() 
{
    return (
      <section className="healthcare-section">
        <div className="section-header">
          <FaHeartbeat className="section-icon" /> {/* Large healthcare icon */}
          <h2 className="section-title">AI in Healthcare</h2>
        </div>
  
        <div className="cards-container">
          {/* Card for AI in diagnosis */}
          <div className="card">
            <FaStethoscope className="card-icon" />
            <h3 className="card-title">AI in Diagnosis</h3>
            <p className="card-description">
              AI systems are being used to diagnose diseases accurately by analyzing medical images and patient data.
              It helps doctors make faster and more accurate decisions, improving patient outcomes.
            </p>
          </div>
  
          {/* Card for AI in robotic surgery */}
          <div className="card">
            <FaRobot className="card-icon" />
            <h3 className="card-title">AI in Robotic Surgery</h3>
            <p className="card-description">
              AI-powered robots assist surgeons in performing highly precise and minimally invasive surgeries,
              improving recovery time and reducing complications.
            </p>
          </div>
  
          {/* Card for AI in treatment */}
          <div className="card">
            <FaUserMd className="card-icon" />
            <h3 className="card-title">AI in Treatment</h3>
            <p className="card-description">
              AI is assisting healthcare professionals in creating personalized treatment plans, considering patient history,
              genetics, and real-time data, leading to better results and quicker recovery.
            </p>
          </div>
  
          {/* Card for AI in research */}
          <div className="card">
            <FaFlask className="card-icon" />
            <h3 className="card-title">AI in Research</h3>
            <p className="card-description">
              AI accelerates medical research by analyzing large datasets, finding patterns, and helping researchers develop
              new medicines and therapies faster than ever before.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default HealthcareSection;