import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Components/Admin DB/Admin Dashboard/assets/scss/style.scss"
// import "./components/Seller Dashboard/assets/scss/style.scss"
import './Components/Main Website/assets/css/icofont.min.css';
import './Components/Main Website/assets/css/animate.css';
import './Components/Main Website/assets/css/style.min.css';

import { Provider } from "react-redux";
import merastore from './Components/Main Website/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={merastore}>
      <App />
    </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
