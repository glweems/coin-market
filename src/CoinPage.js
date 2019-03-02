import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { apiFetch, coinFullInfoUrl, CoinGeneralInfoUrl } from "./Api";
import LoadingSpinner from "./Components/LoadingSpinner";
import CoinChart from "./Components/CoinChart";
import CoinHero from "./Components/CoinHero";

const CoinPageBody = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  div {
    background: pink;
  }
`;

export class CoinPage extends Component {
  state = {
    COIN_ID: this.props.match.params.id
  };

  componentDidMount() {
    apiFetch(CoinGeneralInfoUrl(this.state.COIN_ID), data => {
      console.log(`CoinGeneralInfo Fetch Successful`);
      this.setState({
        ...data.Data[0].CoinInfo
      });
    });

    apiFetch(coinFullInfoUrl(this.state.COIN_ID), data => {
      console.log(`CoinGeneralInfo Fetch Successful`);
      this.setState({
        usd: data.DISPLAY[this.state.COIN_ID].USD,
        btc: data.DISPLAY[this.state.COIN_ID].BTC
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state ||
        !this.state.btc ||
        !this.state.usd ||
        !this.state.ImageUrl ? (
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
            <CoinPageBody>
              <div>
                <h1>{`Market Cap ${this.state.usd.MKTCAP}`}</h1>
                <h1>{`Price ${this.state.usd.PRICE}`}</h1>
                <h1>{`Volume 24Hr ${this.state.usd.VOLUME24HOURTO}`}</h1>
                <h1>{`Supply ${this.state.usd.SUPPLY}`}</h1>
              </div>
              <div>
                <CoinChart COIN_ID={this.props.match.params.id} />
              </div>
            </CoinPageBody>
          </section>
        )}
      </React.Fragment>
    );
  }
}

CoinPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  }).isRequired
};

export default {};
