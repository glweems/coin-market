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
      <table className="table is-fullwidth is-striped" style={tableStyle}>
        {TableHeader()}
        <tbody>{TableRows()}</tbody>
      </table>
    );
    return (
      <section>
        <div className="container is-fluid">
          {!this.state.data ? <em>Loading...</em> : table()}
        </div>
      </section>
    );
  }
}

const tableStyle = {
  maxWidth: "100%",
  overflow: "scroll"
};

export default CoinTable;
