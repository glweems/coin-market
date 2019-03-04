import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { setApi, CryptoCompareList } from "../Api";
import { Pagination } from "./Pagination";

const TableHeaders = ["Rank", "Name", "Market Cap", "Price", "Change"];
const pagination = {
  limit: 50,
  start: 0
};
export class CoinTable extends Component {
  componentDidMount = () => {
    setApi(CryptoCompareList("mktcapfull", pagination.limit, 0, "USD"), data =>
      this.setState({
        coins: data,
        page: 0
      })
    );
  };

  next = () => {
    setApi(
      CryptoCompareList(
        "mktcapfull",
        pagination.limit,
        this.state.page + 1,
        "USD"
      ),
      data =>
        this.setState({
          coins: data,
          page: this.state.page + 1
        })
    );
  };

  prev = () => {
    setApi(
      CryptoCompareList(
        "mktcapfull",
        pagination.limit,
        this.state.page - 1,
        "USD"
      ),
      data =>
        this.setState({
          coins: data,
          page: this.state.page - 1
        })
    );
  };

  render() {
    return (
      <section>
        {!this.state ? (
          <LoadingSpinner />
        ) : (
          <React.Fragment>
            <Pagination
              page={this.state.page}
              next={this.next}
              prev={this.prev}
              limit={pagination.limit}
            />
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  {TableHeaders.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.coins.map((coin, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={coin.name}>{coin.name}</Link>
                    </td>
                    <td>{coin.mktcap}</td>
                    <td>{coin.price}</td>
                    <td>{coin.changepct24hour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              page={this.state.page}
              next={this.next}
              prev={this.prev}
              limit={pagination.limit}
            />
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default CoinTable;
