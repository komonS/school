import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css'
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Menu from './component/layout/Menu'
import Home from './component/content/Home'

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Menu />
        <div id="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>



  );
}

export default App;
