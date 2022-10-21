const got = require('got');

const fetchRepositoryInfo = (api,callback) => {
  got('https://api.github.com/repos/' + api)
  .then((response) => {
    const objectResponse = JSON.parse(response.body);
    callback(objectResponse);
  });
}

module.exports = fetchRepositoryInfo;