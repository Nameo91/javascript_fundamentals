class Github {
  constructor(api) {
    this.api = api;
    this.response;
  }

  fetch(repo) {
    this.api.fetchRepositoryData(repo, (response) => {
      this.response = response;
    });
  }

  getRepoData() {
    return this.response;
  }
}

module.exports = Github;