import React, { Component } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";
import axios from "axios";
import CoinChart from "./Components/CoinChart";
import CoinHero from "./Components/CoinHero";

export class CoinPage extends Component {
  state = null;
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
    if (!this.state) {
      (async () => {
        try {
          this.setState({
            ...(await this.getCoinInfo()).CoinInfo,
            usd: { ...(await this.getStats()).USD },
            btc: { ...(await this.getStats()).BTC }
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
  render() {
    return (
      <React.Fragment>
        <section>
          {!this.state ? (
            <LoadingSpinner />
          ) : (
            <section className="container">
              <CoinHero
                img={this.state.ImageUrl}
                title={this.state.Name}
                marketCap={this.state.usd.MKTCAP}
                usd={this.state.usd}
                btc={this.state.btc}
              />
              <CoinChart COIN_ID={this.props.match.params.id} />
              <h1 className="title">{this.state.usd.PRICE}</h1>
              <h1>{this.state.btc.PRICE}</h1>
              <h1>{this.state.usd.SUPPLY}</h1>
              <h1>{JSON.stringify(this.state)}</h1>
            </section>
          )}
        </section>
      </React.Fragment>
    );
  }
}
