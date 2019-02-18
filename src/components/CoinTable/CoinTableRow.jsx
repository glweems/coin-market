import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CoinTableRow extends Component {
  changeStyle = () => {
    return {
      marginLeft: "1rem",
      color: this.props.coin.percent_change_24h >= 0 ? "green" : "red"
    };
  };

  render() {
    const coin = this.props.coin;
    const getChange = change => {
      return (
        <React.Fragment>
          <span>%</span>
          <span style={this.changeStyle(change)}>{change}</span>
        </React.Fragment>
      );
    };
    return (
      <tr>
        <td>{coin.rank}</td>
        <td>
          <Link to={`/coins/${coin.symbol}`}>
            <span>{coin.symbol}</span>
          </Link>
        </td>
        <td>{coin.price_usd}</td>
        <td>{coin.market_cap_usd}</td>
        <td>{getChange(coin.percent_change_24h)}</td>
      </tr>
    );
  }
}

// const imgStyle = {
//   width: "25px",
//   verticalAlign: "middle",
//   marginRight: "1rem"
// };

export default CoinTableRow;
