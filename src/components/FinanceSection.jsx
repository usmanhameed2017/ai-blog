import React from 'react';
import { FaMoneyBillAlt, FaCreditCard, FaShieldAlt, FaChartLine } from 'react-icons/fa'; // Finance related icons
import '../css/FinanceSection.css'; // Import the CSS file for styling

function FinanceSection() 
{
  return (
    <section className="finance-section">
      <div className="section-header">
        <FaMoneyBillAlt className="section-icon" /> {/* Large finance icon */}
        <h2 className="section-title">AI in Finance</h2>
      </div>

      <div className="cards-container">
        {/* Card for AI in Fraud Detection */}
        <div className="card">
          <FaShieldAlt className="card-icon" />
          <h3 className="card-title">Fraud Detection</h3>
          <p className="card-description">
            AI algorithms help identify suspicious transactions and patterns, preventing financial fraud in real-time.
          </p>
        </div>

        {/* Card for AI in Algorithmic Trading */}
        <div className="card">
          <FaChartLine className="card-icon" />
          <h3 className="card-title">Algorithmic Trading</h3>
          <p className="card-description">
            AI analyzes market trends and historical data to make high-frequency trading decisions, optimizing profit.
          </p>
        </div>

        {/* Card for AI in Customer Service */}
        <div className="card">
          <FaCreditCard className="card-icon" />
          <h3 className="card-title">Customer Service</h3>
          <p className="card-description">
            AI-powered chatbots and virtual assistants provide round-the-clock customer support, resolving inquiries efficiently.
          </p>
        </div>

        {/* Card for AI in Investment Management */}
        <div className="card">
          <FaMoneyBillAlt className="card-icon" />
          <h3 className="card-title">Investment Management</h3>
          <p className="card-description">
            AI helps investors make smarter decisions by analyzing vast amounts of financial data and predicting market trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinanceSection;