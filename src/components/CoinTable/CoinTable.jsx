import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    let data = this.getCoins();
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({
            coins: [
              ...(await data).map(coin => {
                return {
                  CoinInfo: { ...{ ...coin.CoinInfo }, ...coin.DISPLAY.USD }
                };
              })
            ],
            data: await data
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
  render() {
    const TableRows = () =>
      this.state.data.map((row, index) => (
        <TableRow key={row.CoinInfo.Name} coin={row} rank={index} />
      ));

    const Table = () => (
      <table className="table is-striped" style={tableStyle}>
        {TableHeader(TableHeaders)}
        <tbody>{TableRows()}</tbody>
      </table>
    );
    return (
      <section>{!this.state.data ? <em>Loading...</em> : Table()}</section>
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
      color: props.coin.DISPLAY.USD.CHANGEPCTDAY >= 0 ? "green" : "red"
    };
  };

  const imgStyle = {
    width: "25px",
    verticalAlign: "middle",
    marginRight: "1rem"
  };

  const { coin, rank } = props;
  const { Name } = coin.CoinInfo;
  const { MKTCAP, PRICE, CHANGEPCTDAY, IMAGEURL } = coin.DISPLAY.USD;
  const CoinImg = URL => `https://cryptocompare.com/${URL}`;

  const NameRow = () => (
    <Link to={Name}>
      <img style={imgStyle} src={CoinImg(IMAGEURL)} alt={`${Name}`} />
      {Name}
    </Link>
  );

  return (
    <tr>
      <td>{rank}</td>
      <td style={nameCell}>{NameRow()}</td>
      <td>{MKTCAP}</td>
      <td>{PRICE}</td>
      <td style={changeStyle()}>{`${CHANGEPCTDAY}%`}</td>
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
