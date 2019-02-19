import React, { Component } from "react";
import CoinTableRow from "./CoinTableRow";
import axios from "axios";
require("dotenv").config();
export class CoinTableBody extends Component {
  state = {
    coins: []
  };

  componentDidMount() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        this.setState({
          coins: response.data
        });
        console.log("API Fetch Successfull");
      })
      .catch(err => {
        console.log("API call error:", err.message);
      });
  }
  render() {
    const CoinTableRows = this.state.coins.map((coin, index) => (
      <CoinTableRow key={coin.symbol} rank={index} coin={coin} />
    ));

    return <tbody>{CoinTableRows}</tbody>;
  }
}

export default CoinTableBody;
