/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Adding the Firebase products to use (auth,db)
import 'firebase/auth';
// firebase DB
import 'firebase/firestore';

// pre-built UI
import 'firebaseui';

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1b2P_4m0aiYVx_jG0XarNajct0P7CVuc',
  authDomain: 'jela-bakery-db.firebaseapp.com',
  databaseURL: 'https://jela-bakery-db.firebaseio.com',
  projectId: 'jela-bakery-db',
  storageBucket: 'jela-bakery-db.appspot.com',
  messagingSenderId: '304892963099',
  appId: '1:304892963099:web:4f90e5ae7a56296ae60bbe',
  measurementId: 'G-8NJEN1G2ZK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Utility methods
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Handling the Google Accounts sign-in flow with Firebase JS SDK
// Create an instance of the Google provider project
const provider = new firebase.auth.GoogleAuthProvider();
// Trigger Google Popup everytime user wants to signin with Google account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

// Creating user on the firestore DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error! User not creating..', error.message);
    }
  }
  return userRef;
};
// Export the entire Firebase library just in case we need it in the app.
export default firebase;
