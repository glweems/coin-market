import React, { Component } from "react";
import CoinTable from "./Components/CoinTable";
import Hero from "./Components/Hero";
class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container" style={AppStyle}>
          <Hero title="markets" />
          <CoinTable />
        </section>
      </div>
    );
  }
}

const AppStyle = {
  maxWidth: "100%"
};

export default App;
