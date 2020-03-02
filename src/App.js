import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import LoginSignupPage from './pages/login_signup_page/LoginSignupPage';
import NavBar from './components/navbar/NavBar';

import { auth, createUserProfileDocument } from './firebase/firebase.utilities';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /* 
      An observer method for current user. This the recommended way to get the current user)
      This is a Firebase feature that allows user persistence. It's an open subscriber that listens to state changes on the Firebase backend. 
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // If user is signed in.
        const userRef = await createUserProfileDocument(userAuth);

        // Subscribe(listen) to this userRef for any changes on this data.
        userRef.onSnapshot(snapShot => {
          // Auth approved user data retrieved from firestore DB
          const userData = snapShot.data();

          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...userData,
              },
            },
            () => console.log(this.state),
          );
        });
      } else {
        // No user is signed in. (In this case, userAuth will be already set to null)
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />

        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginSignupPage} />
      </div>
    );
  }
}

export default App;
