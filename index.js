// Importing axios from axios module and parse function from node-html-parser
var axios = require("axios");
var { parse } = require("node-html-parser");

// Scrape function to fetch the data from a webpage and show it's HTML Elements in the parsed data
let scrape = async (url) => {
  let data = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36"
    }
  });

  let res = parse(data.data)
  console.log('Scraping price...')
  let price = res.querySelector('.a-price .a-offscreen').textContent
  console.log(price)
  console.log('Done...')
  return price
};

scrape(
  "https://amzn.eu/d/5SZAHrl"
);