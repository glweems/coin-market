import axios from "axios";

axios
  .get("https://api.coinmarketcap.com/v1/ticker/")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
