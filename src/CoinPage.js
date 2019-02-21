import React, { Component } from "react";
import { CoinImg } from "./Api";
import axios from "axios";

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
            <em>Loading..</em>
          ) : (
            <section className="container">
              <CoinHero
                title={this.state.FullName}
                subtitle={`Market Cap: ${this.state.usd.MKTCAP}`}
              />
              <p>{this.COIN_ID}</p>
              <img src={CoinImg(this.state.ImageUrl)} alt="" />
            </section>
          )}
        </section>
      </React.Fragment>
    );
  }
}

const CoinHero = props => {
  let subtitle, title;
  if (props.title) title = () => <h2 className="title">{props.title}</h2>;
  if (props.subtitle)
    subtitle = () => <h2 className="subtitle">{props.subtitle}</h2>;
  return (
    <section className="hero">
      <div className="hero-body">
        {title()}
        {subtitle()}
      </div>
    </section>
  );
};
