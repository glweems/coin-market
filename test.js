require("isomorphic-fetch");
require("dotenv").config();

// const coinMarketFetch = url => {
//   fetch(`https://pro-api.coinmarketcap.com/v1/${url}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "X-CMC_PRO_API_KEY": process.env.COINMARKET_API
//     }
//   })
    .then(res => res.json())
    .then(body => console.log(body))
    .then(resJson => {
      console.log(resJson, "res JSON");
      if (resJson.status == "success") {
        console.log(this.state);
      }
    })
    .catch(error => {
      console.error(error);
    });
// };

// coinMarketFetch(`cryptocurrency/btc`);
// coinMarketFetch(`/cticker/btc`);

const coinMarketFetch = url => {
  fetch(`https://api.coinmarketcap.com/v1/ticker/${url}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson, "res JSON");
      if (resJson.status == "success") {
        console.log(this.state);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

coinMarketFetch(``);
// coinMarketFetch(`/cticker/btc`);
