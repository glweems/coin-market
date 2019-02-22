// import { React } from "react";

const baseUrl = "https://min-api.cryptocompare.com/";

export const CoinInfoUrl = COIN_ID =>
  `${baseUrl}/data/coin/generalinfo?fsyms=${COIN_ID}&tsym=USD`;

export const CoinUsdBtcUrl = COIN_ID =>
  `${baseUrl}/data/pricemultifull?fsyms=${COIN_ID}&tsyms=USD,BTC`;

export const CoinImg = URL => `https://cryptocompare.com/${URL}`;
export const CoinImgUrl = URL => `https://cryptocompare.com/${URL}`;

// export const CoinImgMed = props => (
//   <img src={CoinImg(props.url)} alt="Crypto Currency Icon" />
// );

export default { CoinInfoUrl, CoinUsdBtcUrl, CoinImg, CoinImgUrl };
