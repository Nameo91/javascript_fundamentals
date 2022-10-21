const { Github } = require('./githubApi');

describe('Github', () => {
  it('gets the repo data fetched by the Api class', (done) => {
    const mockedApi = {
      fetchRepositoryData: (_, cd) => {
        const mockData = { full_name: 'sinatra/sinatra' };
        cd(mockData);
      },
    };

    const github = new Github(mockedApi);
    github.fetch('sinatra/sinatra');
    
    setTimeout(() => {
      const repoData = github.getRepoData();
      expect(repoData.full_name).toEqual('sinatra/sinatra');
      done();
    }, 0);
  });
});




    // Test without Mocking
    // const { Github, GithubApi } = require('./githubApi');

    // describe('Github', () => {
    //   it('gets the repo data fetched by the Api class', (done) => {
    //     const api = new GithubApi();
    //     const github = new Github(api);
    //     github.fetch('sinatra/sinatra')
    
    //     setTimeout(() => {
    //       const repoData = github.getRepoData();
    //       expect(repoData.full_name).toEqual('sinatra/sinatra');
    //       done();
    //     }, 1500);
    //   });
    // });