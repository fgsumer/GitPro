import React from 'react';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';



const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App() {
  return (
<div>
  <h1>IT'S fasdfasdfkjhaa</h1>
</div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
