const baseUrl = "https://min-api.cryptocompare.com/";

export const CoinInfoUrl = COIN_ID =>
  `${baseUrl}/data/coin/generalinfo?fsyms=${COIN_ID}&tsym=USD`;

export const CoinUsdBtcUrl = COIN_ID =>
  `${baseUrl}/data/pricemultifull?fsyms=${COIN_ID}&tsyms=USD,BTC`;

export const CoinImg = URL => `https://cryptocompare.com/${URL}`;

export default { CoinInfoUrl, CoinUsdBtcUrl, CoinImg };
