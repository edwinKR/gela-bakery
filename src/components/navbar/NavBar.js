import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">HOME</Link>
      </div>

      <div className="option-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/about">
          ABOUT
        </Link>
        <Link className="option" to="/contact">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
