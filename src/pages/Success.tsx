import React from 'react';
import { Link } from 'react-router-dom'; // Using React Router Link component instead
import './Success.css'; // Optional: Create a CSS file for styling

const Success: React.FC = () => {
  return (
    <div className="success-page-container">
      <div className="success-card">
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <p>We'll get back to you as soon as possible.</p>
        <Link to="/" className="back-home-link">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Success;