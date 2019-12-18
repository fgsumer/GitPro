import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import Homepage from './landing/homepage';
import SignUp from './landing/signUp';
import LoggedIn from './authed/main';
import LoginComponent from './landing/login';
import LogoutComponent from './landing/logout';
import CreateComponent from './landing/create';
import Preview from '../src/landing/Preview/Preview';
import GithubComponent from './authed/dashboard/github';
import PortfolioComponent from './authed/dashboard/portfolio';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/auth" component={LoggedIn} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/logout" component={LogoutComponent} />
        <Route path="/create" component={CreateComponent} />
        <Route path="/preview" component={Preview} />
        <Route path="/github" component={GithubComponent} />
        <Route path="/portfolio" component={PortfolioComponent} />
      </div>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
