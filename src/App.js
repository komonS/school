import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css'
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Menu from './component/layout/Menu'
import Home from './component/content/Home'
import Login from './component/content/Login';

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Menu />
        <div id="content">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>



  );
}

export default App;
