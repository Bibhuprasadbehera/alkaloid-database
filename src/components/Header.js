// Header.js
import React from 'react';
import './Header.css';
import logo from '../images/logo2.png'; // Replace with the actual path to your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>PEPTALOID DATABASE</h1>
          <p>
            <u>Pept</u>ide alk<u>aloid</u> (peptaloid) contains over 160,000 natural molecules known as peptide alkaloids, offering vast opportunities for drug discovery, ecological research, and biotechnological innovations.
          </p>
          <p>
            Explore the comprehensive collection of peptide alkaloids and unlock the potential of nature's bioactive compounds.
          </p>
        </div>
        <div className="header-logo">
          <img src={logo} alt="Peptaloid Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;