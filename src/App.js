import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinTable from "./Components/CoinTable";
import Hero from "./Components/Hero";
import axios from "axios";

const HomePage = () => (
  <React.Fragment>
    <section className="container is-fluid">
      <Hero title="Coin Markets" />
    </section>
    <section className="container">
      <CoinTable />
    </section>
  </React.Fragment>
);

class CoinPage extends Component {
  state = {};
  COIN_ID = this.props.match.params.id;

  // * Get Coin Info
  async getCoinInfo() {
    const res = await axios(
      `https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${
        this.COIN_ID
      }&tsym=USD`
    );
    return await { ...res.data.Data[0] };
  }

  // * Get Coin Stats
  async getStats() {
    const res = await axios(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${
        this.COIN_ID
      }&tsyms=USD,BTC`
    );
    return await { ...res.data.DISPLAY[this.COIN_ID] };
  }
  componentDidMount() {
    if (!this.state.data) {
      (async () => {
        try {
          this.setState({
            info: { ...(await this.getCoinInfo()).CoinInfo },
            usd: { ...(await this.getStats()).USD },
            btc: { ...(await this.getStats()).BTC }
          });
          this.setState({ data: await this.getStats() });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
  render() {
    return (
      <React.Fragment>
        <Hero title={this.props.match.params.id} />
        <section>
          <p>{this.COIN_ID}</p>
          {!this.state.data ? <em>Loading...</em> : <p>{this.COIN_ID}</p>}
        </section>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route path="/" component={HomePage} exact />
            <Route path="/:id" component={CoinPage} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
