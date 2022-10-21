const got = require('got');

class GithubApi {
  #BASE_URL = 'https://api.github.com/repos/';

  fetchRepositoryData(repo, callbackFn) {
    const url = this.#BASE_URL + repo;
    const responseHandler = (response) => {
      const repoData = JSON.parse(response.body);
      callbackFn(repoData);
    }
    got(url).then(responseHandler);
  }
}

class Github {
  #api;
  #repoData;

  constructor(api) {
    this.#api = api;
  }

  fetch(repoName) {
    this.#api.fetchRepositoryData(repoName, (repoData) => {
      this.#repoData = repoData;
    });
  }

  getRepoData() {
    return this.#repoData;
  }
}

module.exports = { GithubApi, Github };

