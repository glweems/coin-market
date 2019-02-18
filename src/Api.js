const API_KEY = "Apikey " + process.env.API_KEY;

export const getCoins = URL => {
  return {
    method: "get",
    url: `https://min-api.cryptocompare.com${URL}`,
    headers: {
      Authorization: API_KEY
    }
  };
};
