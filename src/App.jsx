import React, { Component } from "react";
import CoinList from "./components/CoinList";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-link">
          <div className="hero-body">
            <h1 className="title">Coin Markets</h1>
          </div>
        </section>
        <section className="container">
          <CoinList />
        </section>
      </div>
    );
  }
}

export default App;
