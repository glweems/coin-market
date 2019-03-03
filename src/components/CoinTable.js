import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { apiFetch, coinListFullUrl, CCcoinListUrl } from "../Api";

// const Pagination = styled.div`
//   float: right;
//   padding: 0.5rem;
//   button {
//     margin-right: 0.5rem;
//     &:last-child {
//       margin-right: 0;
//     }
//   }
// `;

const TableHeaders = ["Rank", "Name", "Market Cap", "Price", "Change"];
const pagination = {
  limit: 100,
  start: 0
};
export class CoinTable extends Component {
  componentDidMount = () => {
    async function apiFetcher(callback) {
      const CryptoCompare = await apiFetch(
        CCcoinListUrl(pagination.limit, pagination.start),
        data => data.Data
      );

      const CoinMarket = await apiFetch(
        coinListFullUrl(pagination.limit, pagination.start),
        data => {
          return data;
        }
      );
      const merged = () => {
        function mapper(item) {
          let matched = CryptoCompare.filter(
            coin => coin.CoinInfo.Name === item.symbol
          );
          return {
            ...item,
            CCData: { ...matched[0] }
          };
        }
        const data = CoinMarket.map(mapper);
        return data;
      };
      return callback(merged());
    }
    apiFetcher(data =>
      this.setState({
        coins: data,
        pagination: {
          start: pagination.start,
          limit: pagination.limit
        }
      })
    );

    // apiFetch(CCcoinListUrl(pagination.limit, pagination.start), data => {
    //   // console.log(data.Data);
    //   // console.log(data.Data.filter(coin => coin.CoinInfo.Name === "WAX"));
    // });

    // apiFetch(coinListFullUrl(pagination.limit, pagination.start), data => {
    //   console.log("CoinMarketCap Fetch Successful");
    //   this.setState({
    //     coins: data
    //   });
    // });
  };

  // next = () => {
  //   const { pagination } = this.state;

  //   let start = pagination.start + pagination.limit;

  //   apiFetch(coinListFullUrl(pagination.limit, start), data => {
  //     console.log("CoinMarketCap Fetch Successful");
  //     this.setState({
  //       coins: data,
  //       pagination: {
  //         start: start,
  //         limit: pagination.limit
  //       }
  //     });
  //   });
  // };

  // previous = () => {
  //   const { pagination } = this.state;
  //   const start = pagination.start - pagination.limit;

  //   apiFetch(coinListFullUrl(pagination.limit, start), data => {
  //     console.log("CoinMarketCap Fetch Successful");
  //     this.setState({
  //       coins: data,
  //       pagination: {
  //         start: start,
  //         limit: pagination.limit
  //       }
  //     });
  //   });
  // };

  render() {
    // const { coins, pagination, TableHeaders } = this.state;

    // const paginationClasses = "button is-outlined is-small";

    // const prevButton = () => {
    //   if (pagination.start !== 0) {
    //     return (
    //       <button
    //         type="button"
    //         onClick={this.previous}
    //         className={paginationClasses}
    //       >
    //         {`<- Previous ${pagination.limit}`}
    //       </button>
    //     );
    //   }
    // };

    return (
      <section>
        {!this.state ? (
          <LoadingSpinner />
        ) : (
          <React.Fragment>
            {/* <Pagination>
              {prevButton()}
              <button
                type="button"
                className={paginationClasses}
                onClick={this.next}
              >
                {`Next ${pagination.limit} ->`}
              </button>
            </Pagination> */}
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
                    <td>{coin.rank}</td>
                    <td>
                      <Link to={coin.symbol}>{coin.name}</Link>
                    </td>
                    <td>{coin.name}</td>
                    {/* <td>{setTimeout(coin.CCData.CoinInfo, 3000)}</td> */}
                    {/* <td>{coin.CCData.CoinInfo.Id}</td> */}
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
