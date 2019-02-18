import React, { Component } from "react";
import CoinListItem from "./CoinListItem";

export class CoinList extends Component {
  render() {
    const coins = this.props.coins;
    return coins.map(coin => (
      <CoinListItem key={coin.CoinInfo.Name} coin={coin.CoinInfo} />
    ));
  }
}

export default CoinList;
