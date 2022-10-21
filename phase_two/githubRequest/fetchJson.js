const got = require('got');

const fetchJson = (url, callback) => {
  got(url)
  .then((response) => {
    const objectResponse = JSON.parse(response.body);
    callback(objectResponse);
  });
}

module.exports = fetchJson;

