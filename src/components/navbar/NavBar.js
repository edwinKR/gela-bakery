import React from 'react';
import { Link } from 'react-router-dom';

// connect: is a HOC that allows us to modify our react components have access to the redux state.
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
