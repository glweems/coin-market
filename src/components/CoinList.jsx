import React, { Component } from "react";
import CoinListItem from "./CoinListItem";
import TableHeader from "./TableHeader";
import axios from "axios";

const API =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
const API_KEY = "Apikey " + process.env.API_KEY;
export class CoinList extends Component {
  state = {
    coins: [],
    data: {}
  };

  componentDidMount() {
    axios
      .get(API, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        this.setState({
          coins: response.data.Data,
          data: response.data
        });
        console.log("API Fetch Successfull");
      })
      .catch(err => {
        console.log("API call error:", err.message);
      });
  }

  render() {
    const headings = ["#", "Name", "Market Cap", "Price", "Change (24hr)"];
    const TableRows = this.state.coins.map((coin, index) => (
      <CoinListItem key={coin.CoinInfo.Name} rank={index} coin={coin} />
    ));

    return (
      <div>
        {/* <p>{this.state.coins[0]}</p> */}
        <table className="table is-fullwidth">
          <TableHeader headers={headings} />
          <tbody>{TableRows}</tbody>
        </table>
      </div>
    );
    // <table id="t01">
    //   <thead>
    //     <tr>
    //       <th>Firstname</th>
    //       <th>Lastname</th>
    //       <th>Age</th>
    //     </tr>
    //   </thead>
    //   <Coins/>
    //   <tbody>
    //     <tr>
    //       <td>Eve</td>
    //       <td>Jackson</td>
    //       <td>94</td>
    //     </tr>
    //   </tbody>
    // </table>
  }
}

export default CoinList;
