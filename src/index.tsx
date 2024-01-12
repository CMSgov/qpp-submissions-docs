// @ts-nocheck
import './polyfills';

import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './app/components/app';
import history from './history';

import './index.scss';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
