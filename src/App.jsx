import React, { Component } from "react";
import CoinTable from "./Components/CoinTable";
class App extends Component {
  render() {
    return (
      <section className="App container">
        <CoinTable />
      </section>
    );
  }
}

export default App;
