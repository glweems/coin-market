import React, { Component } from "react";
import "bulma";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/coins/:id" component={CoinPage} />
        </div>
      </Router>
    );
  }
}

export default App;
