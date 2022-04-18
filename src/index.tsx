import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import "../src/styles/auth.scss";
import "../src/styles/layout.scss";
import 'react-toastify/dist/ReactToastify.css';
import store from "./store/index"
import setAuthToken from './utils/setAuthToken';
import { loginUserAction, logoutUser } from './store/actions/auth';
import { IDecoded } from './models/User';


if(localStorage.getItem('developerToken')) {
  let token = localStorage.getItem('developerToken');  

  const decoded: IDecoded = jwtDecode(token!);
  
  // check token expiration
  const thisTime = Date.now() / 1000;

  if (decoded.exp < thisTime) {
    store.dispatch<any>(logoutUser());
    window.location.href = "/";
    window.location.reload();
  }

  // set user & isAuthenticated
  store.dispatch<any>(loginUserAction(decoded));

  setAuthToken(token!)
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
