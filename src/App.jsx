import React, { Component } from "react";
import CoinList from "./components/CoinList";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinList />
      </div>
    );
  }
}

export default App;
