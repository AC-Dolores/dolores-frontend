import 'es6-promise';
import 'isomorphic-fetch';

const api = (path)
  => fetch(path, options)
    .then(response => {
      if(response.status >= 400){
        throw new Error('fetch api error')
      }
      return response.json()
    });

export default api;
