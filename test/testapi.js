require('es6-promise').polyfill();
require('isomorphic-fetch');


const options = {
  method: 'GET',
  headers:{
    'Accept-Encoding': 'gzip, deflate, br'
  
  },
  compress: true

};

fetch('https://api.readhub.me/topic?pageSize=10',options).then(response => {
  if(response.status >= 400){
    throw new Error('fetch api error')
  }
  console.log(JSON.stringify(response))
  return response.json
})
