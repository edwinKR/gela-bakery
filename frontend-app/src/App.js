import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

// connect: is a HOC that allows us to modify our react components have access to the redux state.
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import LoginSignupPage from './pages/login_signup_page/LoginSignupPage';
// import CheckoutPage from './pages/checkout_page/CheckoutPage';
import { default as CheckoutPage } from './pages/checkout_page/CheckoutPage_Container';
// import NavBar from './components/navbar/NavBar';
import { default as NavBar } from './components/navbar/NavBar_Container';

import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
import { setCurrentUser } from './redux/user/user_action';

import './App.css';

const App = (props) => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    /* 
      An observer method for current user. This the recommended way to get the current user.
      This is a Firebase feature that allows user persistence. It's an open subscriber that listens to state changes on the Firebase backend. 
    */
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // If user is signed in.
        const userRef = await createUserProfileDocument(userAuth);

        // Subscribe(listen) to this userRef for any changes on this data.
        userRef.onSnapshot((snapShot) => {
          // Auth approved user data retrieved from firestore DB
          const userData = snapShot.data();

          setCurrentUser({
            id: snapShot.id,
            ...userData,
          });
        });
      } else {
        // No user is signed in. (In this case, userAuth will be already set to null)
        setCurrentUser(userAuth);
      }
    });

    return () => {
      // Clean up function that is similar to the 'ComponentWillUnmount'
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <NavBar />

      <Route exact path="/" component={HomePage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route path="/shop" component={ShopPage} />
      <Route
        path="/login"
        render={() => (currentUser ? <Redirect to="/" /> : <LoginSignupPage />)}
      />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    // shopData: shop.shopData,
  };
};

const mapDispatchToProps = (dispatch) => {
  // dispatch function: Informs redux that an object will be sent as an action object.
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
