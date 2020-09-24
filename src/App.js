import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./homepage.styles.scss";

import HomePage from "./homepage.component";
import ShopPage from "./pages/shop/shop.page";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
