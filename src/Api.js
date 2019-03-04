export const CoinImgUrl = URL => `https://cryptocompare.com${URL}`;

const baseUrl = `https://min-api.cryptocompare.com`;

export const CoinGeneralInfoUrl = COIN_ID =>
  `${baseUrl}/data/coin/generalinfo?fsyms=${COIN_ID}&tsym=USD`;

export const api = url => `${baseUrl}${url}`;

export const coinListFullUrl = (limit, start) =>
  `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}&start=${start}`;

export const coinGeneralInfoUrl = coin =>
  api(`/data/coin/generalinfo?fsyms=${coin}&tsym=USD`);

export const coinChartUrl = (coin, limit) =>
  api(`/data/histoday?fsym=${coin}&tsym=USD&limit=${limit}`);

export const coinFullInfoUrl = coin =>
  api(`/data/pricemultifull?fsyms=${coin}&tsyms=USD,BTC`);

export const apiFetch = async (url, callback) => {
  const response = await fetch(url);
  const json = await response.json();

  return callback(json);
};

// * Flatten the array
const flatten = array => {
  return array.Data.map(coin => {
    return { ...coin.CoinInfo, ...coin.DISPLAY.USD };
  });
};
// * Change object keys to lowercase
const objCase = array => {
  let clean = array.map(function(item) {
    for (var key in item) {
      item[key.toLowerCase()] = item[key];
      delete item[key];
    }
    return item;
  });
  return clean;
};

// * Fetch Api data and return it
export const CryptoCompareList = (sort, limit, page, currency) =>
  api(`/data/top/${sort}?limit=${limit}&page=${page}&tsym=${currency}`);

export const CryptoCompareCoin = coin =>
  api(`/data/pricemultifull?fsyms=${coin}&tsyms=USD,BTC`);

export const getApi = async url =>
  await fetch(url)
    .then(res => res.json())
    .then(data => objCase(flatten(data)))
    .catch(err => console.log(err.message));

export const coinApi = async url => await fetch(url).then(res => res.json());

export const setCoin = async (api, callback) => callback(await coinApi(api));

// * Run function with api data
export const setApi = async (api, callback) => callback(await getApi(api));

// export default { CoinGeneralInfoUrl, CoinUsdBtcUrl, CoinImg };

// const CoinMarketKey = `&CMC_PRO_API_KEY=167ccedf-26a5-44ff-b07e-c39fcc891e60`;
// const CoinMarketBase = `https://pro-api.coinmarketcap.com/v1/`;

// export const CoinMarketList = limit =>
// `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&limit=100&cryptocurrency_type=tokens&convert=USD&CMC_PRO_API_KEY=167ccedf-26a5-44ff-b07e-c39fcc891e60`;
// `${CoinMarketBase}cryptocurrency/listings/latest?sort=cmc_rank&limit=${limit}&cryptocurrency_type=tokens&convert=USD${CoinMarketKey}`;
// export const CryptoCompareFull = COIN_ID =>
//   `${baseUrl}/data/pricemultifull?fsyms=${COIN_ID}&tsyms=USD,BTC`;

// export const CoinImg = URL => `https://cryptocompare.com/${URL}`;
