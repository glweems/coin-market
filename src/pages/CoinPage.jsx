import React, { Component } from "react";
import "./CoinPage.scss";
import Hero from "../components/Hero";
import axios from "axios";
import { coinImg } from "../Helpers";
let apikey =
  "Apikey=e0464167a575c6a4702b5f94a11e1fbeddfcb6c8d61955720feebb52d9a39595";
export class CoinPage extends Component {
  state = {
    coin: {},
    info: {}
  };
  componentWillMount() {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${
          this.props.match.params.id
        }&tsyms=USD&${apikey}`
      )
      .then(response => {
        this.setState({
          coin: response.data.DISPLAY[this.props.match.params.id].USD
        });
        console.table(response.data.DISPLAY[this.props.match.params.id].USD);
      })
      .catch(err => {
        console.log("API call error:", err.message);
      });
  }

  render() {
    const coin = this.state.coin;
    return (
      <React.Fragment>
        <Hero title={this.props.match.params.id} />
        <section className="coin-page">
          <div className="has-background-info">
            <div className="icon">
              <img src={coinImg(coin.IMAGEURL)} alt="{coin.Name}" />
            </div>
            <ul>
              <li>{`Rank - ${this.props.match.params.id}`}</li>
            </ul>
          </div>
          <div className="has-background-light" />
          <div className="has-background-primary">
            <img src={coinImg(coin.IMAGEURL)} alt="{coin.Name}" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CoinPage;
