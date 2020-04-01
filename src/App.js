import React from 'react';
import { Route, Switch } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

import './App.css';
import './homepage.styles.scss';

import HomePage from './homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
