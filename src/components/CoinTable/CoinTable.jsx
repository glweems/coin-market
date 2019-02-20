import React, { Component } from "react";
import TableRow from "./TableRow";
import axios from "axios";

export class CoinTable extends Component {
  state = {};
  async getData() {
    const res = await axios(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD"
    );
    return await res.data.Data; // (Or whatever)
  }
  constructor(...args) {
    super(...args);
    this.state = { data: null };
  }
  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({ data: await this.getData() });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
  render() {
    const headers = ["Rank", "Name", "Market Cap", "Price", "Change"];
    const TableHeader = () => (
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
    );

    const TableRows = () =>
      this.state.data.map((row, index) => (
        <TableRow key={row.CoinInfo.Name} coin={row} rank={index} />
      ));

    const table = () => (
      <table className="table">
        {TableHeader()}
        <tbody>{TableRows()}</tbody>
      </table>
    );
    return (
      <React.Fragment>
        {!this.state.data ? <em>Loading...</em> : table()}
      </React.Fragment>
    );
  }
}

export default CoinTable;
