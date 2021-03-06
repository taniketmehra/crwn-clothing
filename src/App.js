import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
        <Route path="*" render={() => <h1>Error!! 404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
