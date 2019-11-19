import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, HashRouter as Router} from 'react-router-dom';
import './App.scss';
import WelcomePage from './components/welcome/Welcome.jsx'
import WelcomeMetro from './components/metropolia/WelcomeMetro.jsx'
import IdeaList from './components/metropolia/IdeaList.jsx'
import LandingPage from './components/welcome/landing/LandingPage'
import SignUp from './components/authen/SignupPage'
import SignIn from './components/authen/LoginPage'
import NotFound from './components/error/PageNotFound'
import {ProtectedRoute} from './components/router/ProtectedRoute'
import UserDashboard from './components/user/UserDashboard'
import UserProfileLay from './components/layouts/body/UserProfileLay'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route exact path="/metropolia" component={WelcomeMetro}/>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/metropolia/idea/list" component={IdeaList}/>
          <Route path="/landing" component={LandingPage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <ProtectedRoute exact path="/user" component={UserDashboard}/>
          <ProtectedRoute path="/myprofile" component={UserProfileLay}/>
          <ProtectedRoute path="/user"/>
          <Route component={NotFound} />
        </Switch>
      </Router>
  )};
}

export default App;
