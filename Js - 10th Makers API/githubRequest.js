const got = require('got');

const handleReceivedResponse = (response) => {
  console.log(response.body)
}

const url = 'https://api.github.com/repos/sinatra/sinatra';


got(url)
   .then((response) => {
    const obj = JSON.parse(response.body)
    console.log(obj)
   });
   

  // const stringValue = '{ "name": "John" }';
  // console.log (stringValue.name)
  
  // const objectValue = JSON.parse(stringValue);
  // console.log(objectValue.name);
  