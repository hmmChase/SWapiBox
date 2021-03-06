import React from 'react';
import ReactDOM from 'react-dom';
import './sanitize.css';
import './index.css';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
