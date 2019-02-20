import React, { Component } from "react";

export class TableRow extends Component {
  render() {
    const { coin, rank } = this.props;
    return (
      <tr>
        <td>{rank}</td>
        <td>{coin.CoinInfo.Name}</td>
        <td>{coin.DISPLAY.USD.MKTCAP}</td>
        <td>{coin.DISPLAY.USD.PRICE}</td>
        <td>{coin.DISPLAY.USD.CHANGEPCTDAY}</td>
      </tr>
    );
  }
}

export default TableRow;
