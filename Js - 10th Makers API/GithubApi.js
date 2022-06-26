const got = require('got');

class Github {
  fetchRepositoryData(url, callback){
    got('https://api.github.com/repos/'+ url)
    .then((response) => {
     const obj = JSON.parse(response.body)
     callback(obj)
    });
  }
}


module.exports = Github