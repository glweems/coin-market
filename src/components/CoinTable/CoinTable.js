import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CoinImg } from "../../Api";
import axios from "axios";

export class CoinTable extends Component {
  state = {};

  async getCoins() {
    const res = await axios(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD"
    );
    return await res.data.Data;
  }

  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({
            coins: [
              ...(await this.getCoins()).map(coin => {
                return {
                  ...{ ...coin.CoinInfo },
                  ...coin.DISPLAY.USD
                };
              })
            ]
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
  render() {
    const TableRows = () =>
      this.state.coins.map((coin, index) => (
        <TableRow key={coin.Name} coin={coin} rank={index} />
      ));

    const Table = () => (
      <table className="table is-striped" style={tableStyle}>
        {TableHeader(TableHeaders)}
        <tbody>{TableRows()}</tbody>
      </table>
    );
    return (
      <section>{!this.state.coins ? <em>Loading...</em> : Table()}</section>
    );
  }
}

const TableHeaders = ["Rank", "Name", "Market Cap", "Price", "Change"];

// * Table Header
const TableHeader = headers => (
  <thead>
    <tr>
      {headers.map(header => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  </thead>
);

// * Table Row
const TableRow = props => {
  const changeStyle = () => {
    return {
      color: props.coin.CHANGEPCTDAY >= 0 ? "green" : "red"
    };
  };

  const imgStyle = {
    width: "25px",
    verticalAlign: "middle",
    marginRight: "1rem"
  };

  const { coin, rank } = props;
  // const { Name } = coin.CoinInfo;
  // const { MKTCAP, PRICE, CHANGEPCTDAY, IMAGEURL } = coin.DISPLAY.USD;

  const NameRow = () => (
    <Link to={coin.Name}>
      <img style={imgStyle} src={CoinImg(coin.IMAGEURL)} alt={`${coin.Name}`} />
      {coin.Name}
    </Link>
  );

  return (
    <tr>
      <td>{rank}</td>
      <td style={nameCell}>{NameRow()}</td>
      <td>{coin.MKTCAP}</td>
      <td>{coin.PRICE}</td>
      <td style={changeStyle()}>{`${coin.CHANGEPCTDAY}%`}</td>
    </tr>
  );
};

const nameCell = {
  fontWeight: "500"
};

const tableStyle = {
  width: "100%",
  overflow: "scroll",
  margin: "0 auto"
};

export default CoinTable;
