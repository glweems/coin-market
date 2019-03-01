const baseUrl = `https://min-api.cryptocompare.com`;

export const CoinGeneralInfoUrl = COIN_ID =>
  `${baseUrl}/data/coin/generalinfo?fsyms=${COIN_ID}&tsym=USD`;

export const CoinUsdBtcUrl = COIN_ID =>
  `${baseUrl}/data/pricemultifull?fsyms=${COIN_ID}&tsyms=USD,BTC`;

export const CoinImgUrl = URL => `https://cryptocompare.com/${URL}`;

export const CoinImg = URL => `https://cryptocompare.com/${URL}`;

export const api = url => `https://min-api.cryptocompare.com${url}`;

export const coinListUrl = api(`/data/top/mktcapfull?limit=100&tsym=USD`);

export const coinGeneralInfoUrl = coin =>
  api(`/data/coin/generalinfo?fsyms=${coin}&tsym=USD`);

export const coinChartUrl = coin =>
  api(`/data/histoday?fsym=${coin}&tsym=USD&limit=100`);

export const coinFullInfoUrl = coin =>
  api(`/data/pricemultifull?fsyms=${coin}&tsyms=USD,BTC`);

export const apiFetch = async (url, callback) => {
  const response = await fetch(url);
  const json = await response.json();

  return callback(json);
};

export default { CoinGeneralInfoUrl, CoinUsdBtcUrl, CoinImg };
// export default {
//   coinListUrl,
//   coinGeneralInfoUrl,
//   coinGeneralInfoUrl,
//   coinChartUrl,
//   coinFullInfoUrl
// };
