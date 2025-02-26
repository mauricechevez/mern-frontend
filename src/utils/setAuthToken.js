import axios from 'axios';

// This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) =>{
  // check if token
  if (token){
    // Apply token to every request header. This applies to the API calls.
    axios.defaults.headers.common['Authorization'] = token;
    console.log(`---Headers---`)
    console.log(axios.defaults.headers.common)

  } else {
    delete axios.defaults.headers.common['Authorization'] ;
  }

}

export default setAuthToken;