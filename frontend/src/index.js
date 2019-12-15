import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/signUp'
import Nav from './nav/navigation'
import Github from './components/github'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/nav" component={Nav} />
      <Route path="/github" component={Github} />


    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
