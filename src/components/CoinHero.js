import React from "react";
import styled from "styled-components";
import { CoinImgUrl } from "../Api";

const CoinHeroBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LineOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const W100 = styled.div`
  width: 100%;
`;

const CoinImg = styled.img`
  width: 100px;
  margin-right: 1.25rem;
`;

const PriceUSD = styled.h1`
  color: green;
`;

export const CoinHero = props => (
  <section className="hero">
    <CoinHeroBody className="hero-body">
      <CoinImg src={CoinImgUrl(props.img)} alt="coin image" />
      <W100>
        <LineOne>
          <h1 className="title">{props.title.toUpperCase()}</h1>
          <PriceUSD className="title">{props.usd.PRICE}</PriceUSD>
        </LineOne>
        <h2 className="subtitle">Market Cap: {props.marketCap}</h2>
      </W100>
    </CoinHeroBody>
  </section>
);

export default CoinHero;
