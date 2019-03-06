import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { setApi, CryptoCompareList, CoinImgUrl } from "../Api";
import { Pagination } from "./Pagination";
import { ColoredPercent, TableImg } from "../components/SmallComponents";

const TableHeaders = ["Rank", "Name", "Market Cap", "Price", "Change"];
const pagination = {
  limit: 50,
  start: 0
};

const StyledTabled = styled.table`
  td {
    overflow: scroll;
  }
`;

export class CoinTable extends Component {
  componentDidMount = () => {
    setApi(CryptoCompareList("mktcapfull", pagination.limit, 0, "USD"), data =>
      this.setState({
        coins: data,
        page: 0
      })
    );
    setApi(CryptoCompareList("mktcapfull", pagination.limit, 1, "USD"), data =>
      this.setState({
        next: data
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
          coins: this.state.next,
          next: data,
          prev: this.state.coins,
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
          coins: this.state.prev,
          next: this.state.coin,
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
            <StyledTabled className="table is-fullwidth">
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
                      <TableImg img={CoinImgUrl(coin.imageurl)} />
                      <Link to={`/coin/#${coin.name}`}>{coin.name}</Link>
                    </td>
                    <td>{coin.mktcap}</td>
                    <td>{coin.price}</td>
                    <td>
                      <ColoredPercent percent={Number(coin.changepct24hour)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTabled>
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
