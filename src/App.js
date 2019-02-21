import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinTable from "./Components/CoinTable";
import Hero from "./Components/Hero";
import { CoinPage } from "./CoinPage";

const HomePage = () => (
  <React.Fragment>
    <section className="container is-fluid">
      <Hero title="Coin Markets" />
    </section>
    <section className="container">
      <CoinTable />
    </section>
  </React.Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route path="/" component={HomePage} exact />
            <Route path="/:id" component={CoinPage} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;