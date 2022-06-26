const got = require('got');

class Github {
constructor (api) {
  this.api = api
}
fetch(url){
    got(url)
    .then((response) => {
      return response})};

getRepoData(){

}
}

module.exports = Github