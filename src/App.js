import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
//import Loginpage from './components/Loginpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './components/Loginpage';
//import Signup from './components/Loginpage';
import Signup from './components/Signup';
import Forgetpwd from './components/Forgetpwd';
import NewRelease from './components/NewRelease';
import Help from './components/Help';
import FAQ from './components/FAQ';



function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forgetpwd">
            <Forgetpwd />
          </Route>
          <Route path="/newrelease">
            <NewRelease />
          </Route>
          <Route path="/help">
            <Help/>
          </Route>
          <Route path="/faq">
            <FAQ/>
          </Route>
      </Switch>
    </Router>
    </>
    
   
  );
}

export default App;
