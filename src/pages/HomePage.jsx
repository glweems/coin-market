import React, { Component } from "react";
import CoinTable from "../components/CoinTable/index";
import Hero from "../components/Hero";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero title="Coin Markets" />
        <section className="container">
          <CoinTable />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
