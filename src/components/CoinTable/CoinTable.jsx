import React, { Component } from "react";
import axios from "axios";
export class CoinTable extends Component {
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
    const coins = () =>
      this.state.data.map((item, index) => (
        <tr key={item.CoinInfo.Name}>
          <td>{index}</td>
          <td>{item.CoinInfo.Name}</td>
          <td>{item.DISPLAY.USD.MKTCAP}</td>
          <td>{item.DISPLAY.USD.PRICE}</td>
          <td>{item.DISPLAY.USD.CHANGEPCTDAY}</td>
        </tr>
      ));
    const table = () => (
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>{coins()}</tbody>
      </table>
    );
    return <div>{!this.state.data ? <em>Loading...</em> : table()}</div>;
  }
}

export default CoinTable;
