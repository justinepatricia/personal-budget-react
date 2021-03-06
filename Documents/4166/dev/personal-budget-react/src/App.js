import React from 'react';
import './App.css';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
//import Chart from './Chart/Chart';
import ServerF from './ServerF/server';

function App() {  
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className = "mainContainer">
        <Switch>
          <Route path ="/about">
            <AboutPage/>
          </Route>
          <Route path ="/Login">
            <LoginPage/>
          </Route>
          < Route path ="/">
            <HomePage/>        
          </Route>
        </Switch>
      </div>
      <HomePage/>
    
      <ServerF/>
      <Footer/>
    </Router>
  );
}

export default App;
