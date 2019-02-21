import React, { Component } from "react";
import CoinTable from "./Components/CoinTable";
class App extends Component {
  render() {
    return (
      <div className="App container is-fluid">
        <CoinTable />
      </div>
    );
  }
}

export default App;
