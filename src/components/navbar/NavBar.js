import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utilities';
import './navbar.styles.scss';

const NavBar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">HOME</Link>
      </div>

      <div className="option-container">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT US
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOG IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
