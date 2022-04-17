import axios from "axios";


type tokenParameter = string | boolean

const setAuthToken = (token: tokenParameter) => {
  if (token) {
    // Provide for each request
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}

export default setAuthToken;
