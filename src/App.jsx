import React, { Component } from "react";
import CoinList from "./components/CoinList";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "bulma";

class App extends Component {
  state = {
    coins: []
  };

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD",
        {
          headers: {
            Authorization:
              "Apikey " +
              "01c83fa216ef7a0778fbb2b1704568ee6e18f630a94d93be09c83ef8031b18f3"
          }
        }
      )
      .then(response => {
        this.setState({
          coins: response.data.Data
        });
        console.log("API Fetch Successfull");
      })
      .catch(err => {
        console.log("API call error:", err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <CoinList coins={this.state.coins} />
      </div>
    );
  }
}

export default App;
