import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bulma";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" component={HomePage} exact />
          <Route path="/coins/:id" component={CoinPage} />
        </div>
      </Router>
    );
  }
}

export default App;
