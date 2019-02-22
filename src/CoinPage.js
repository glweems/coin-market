import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { CoinImg } from "./Api";
import { Hero } from "./Components";

const CoinLogo = styled.img`
  width: 100px;
`;

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
              <Hero
                title={this.state.FullName}
                subtitle={`Market Cap: ${this.state.usd.MKTCAP}`}
              />
              <CoinLogo
                src={CoinImg(this.state.ImageUrl)}
                alt={this.state.FullName}
              />
              <h1 className="title">{this.state.usd.PRICE}</h1>
            </section>
          )}
        </section>
      </React.Fragment>
    );
  }
}
