import React, { Component } from "react";

export class CoinListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.rank}</td>
        <td>{this.props.coin.CoinInfo.Name}</td>
        {/* <td>{this.props.coin.DISPLAY.USD.MKTCAP}</td> */}
        <td>{this.props.coin.DISPLAY.USD.PRICE}</td>
        <td>{this.props.coin.DISPLAY.USD.CHANGE24HOUR}</td>
      </tr>
    );
  }
}

export default CoinListItem;
