import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { setApi, CryptoCompareList } from "../Api";

const Pagination = styled.div`
  float: right;
  padding: 0.5rem;
  button {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

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
    const NextButton = () => (
      <button
        type="button"
        onClick={this.next}
        className="button is-outlined is-small"
      >
        {`Next ${pagination.limit} -->`}
      </button>
    );
    const PrevButton = () => (
      <button
        type="button"
        onClick={this.prev}
        className="button is-outlined is-small"
      >
        {`<-- Previous ${pagination.limit}`}
      </button>
    );

    return (
      <section>
        {!this.state ? (
          <LoadingSpinner />
        ) : (
          <React.Fragment>
            <Pagination>
              {this.state.page === 0 ? (
                <NextButton />
              ) : (
                <React.Fragment>
                  <PrevButton />
                  <NextButton />
                </React.Fragment>
              )}
            </Pagination>
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
                  <tr key={index}>
                    <td>{index}</td>
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
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default CoinTable;
