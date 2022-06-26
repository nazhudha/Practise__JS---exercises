const got = require('got');

const fetchJson = (url, callback) => {
  got(url)
  .then((response) => {
    const obj = JSON.parse(response.body);
     callback(obj)
  })
}

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})

