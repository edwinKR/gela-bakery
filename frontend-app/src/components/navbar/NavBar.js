import React from 'react';
import { Link } from 'react-router-dom';

// connect: is a HOC that allows us to modify our react components have access to the redux state.
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utilities';
// import CartIcon from '../cart_icon_component/cart_icon';
import { default as CartIcon } from '../cart_icon_component/cart_icon_container';
import CartDropdown from '../cart_dropdown_component/cart_dropdown';

import { clearCartAsync } from '../../redux/cart/cart_action';

import './navbar.styles.scss';

class NavBar extends React.Component {
  handleLogOut = () => {
    auth.signOut();
    this.props.clearCartAsync();
  };

  render() {
    console.log(this.props);
    const { currentUser, hidden } = this.props;
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
            <div
              className="option"
              onClick={() => {
                this.handleLogOut();
              }}>
              LOG OUT
            </div>
          ) : (
            <Link className="option" to="/login">
              LOG IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    user: { currentUser },
    // cart: { hidden },
  } = state;

  return {
    currentUser,
    // hidden,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCartAsync: () => dispatch(clearCartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
