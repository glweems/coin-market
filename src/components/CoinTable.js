import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { apiFetch, coinListFullUrl } from "../Api";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { CoinImg, apiFetch, coinListUrl, coinListFullUrl } from "../Api";
// const TableHeaders = ["Rank", "Name", "Market Cap", "Price", "Change"];
export class CoinTable extends Component {
  state = {
    TableHeaders: ["Rank", "Name", "Market Cap", "Price", "Change"],
    pagination: {
      limit: 50,
      start: 0
    }
  };

  componentDidMount = () => {
    const { pagination } = this.state;

    apiFetch(coinListFullUrl(pagination.limit, pagination.start), data => {
      console.log("CoinMarketCap Fetch Successful");
      this.setState({
        coins: data
      });
    });
  };

  next = () => {
    const { pagination } = this.state;

    let start = pagination.start + pagination.limit;

    apiFetch(coinListFullUrl(pagination.limit, start), data => {
      console.log("CoinMarketCap Fetch Successful");
      this.setState({
        coins: data,
        pagination: {
          start: start,
          limit: pagination.limit
        }
      });
    });
  };

  previous = () => {
    const { pagination } = this.state;
    const start = pagination.start - pagination.limit;

    apiFetch(coinListFullUrl(pagination.limit, start), data => {
      console.log("CoinMarketCap Fetch Successful");
      this.setState({
        coins: data,
        pagination: {
          start: start,
          limit: pagination.limit
        }
      });
    });
  };

  render() {
    const { coins, pagination, TableHeaders } = this.state;
    let prevButton;
    if (pagination.start > 0) {
      prevButton = <button onClick={this.previous}>Prev</button>;
    }

    return (
      <section>
        {!this.state.coins ? (
          <LoadingSpinner />
        ) : (
          <React.Fragment>
            {prevButton}
            <button onClick={this.next}>Next</button>
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  {TableHeaders.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {coins.map((coin, index) => (
                  <tr key={index}>
                    <td>{coin.rank}</td>
                    <td>{coin.name}</td>
                    <td>{coin.market_cap_usd}</td>
                    <td>{coin.price_usd}</td>
                    <td>{coin.percent_change_24h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default CoinTable;
