import axios from "axios";
const API =
  "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
const API_KEY = "Apikey " + process.env.REACT_APP_CCKEY;
export async function getPosts() {
  return await axios
    .get(API, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then(res => res.data);
  // .then(data => data.Data);
}

export default { getPosts };

// const CoinMarketApiKey = process.env.REACT_APP_CMKEY;
// const CryptoCompareApiKey = process.env.REACT_APP_CCKEY;
// const CoinMarketFetch = () => {
//   return {
//     method: "GET",
//     headers: {
//       "X-CMC_PRO_API_KEY": process.env.REACT_APP_CMKEY
//     }
//   };
// };

// `https://pro-api.coinmarketcap.com/v1/${url}`, {
//   method: "GET",
// headers: {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   "X-CMC_PRO_API_KEY": process.env.COINMARKET_API
// }
// export function fetchAll() {
//   fetch(
//     "https://pro-api.coinmarketcap.com/v1/listings/latest",
//     CoinMarketFetch()
//   )
//     .then(res => res.json())
//     .then(data => console.log(data));
// }

// const testURL = "https://chasing-coins.com/api/v1/coins";
// const myInit = {
//   method: "GET",
//   mode: "no-cors"
// };

// const myRequest = new Request(testURL, myInit);
