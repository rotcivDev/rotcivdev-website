import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles.css';
import App from './containers/App/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root'));


