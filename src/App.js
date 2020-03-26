import React from 'react';
import { Route, Switch } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component.jsx";

import './App.css';
import './homepage.styles.scss';

import HomePage from './homepage.component';

const HatsPage = () => {
  return <div>
           <h1>Hats Page</h1>
         </div>;
};

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
