import React, { Component } from "react";
import CoinTableHeader from "./CoinTableHeader";
import CoinTableBody from "./CoinTableBody";

export class CoinTable extends Component {
  state = {
    headers: ["#", "Name", "Market Cap", "Price", "Change"]
  };

  render() {
    return (
      <table className="table is-fullwidth container">
        <CoinTableHeader headers={this.state.headers} />
        <CoinTableBody />
      </table>
    );
  }
}

export default CoinTable;
