const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();

router.get("/pair", (req, res) => {
  const url = `https://api.kraken.com/0/public/AssetPairs?pair=${req.query.pairs}`;
  const options = {
    method: 'GET',
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      return res.json(json);
    })
    .catch(err => console.error('error:' + err));
});

module.exports = router;
