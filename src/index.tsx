// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './app/components/app';
import history from './history';
import envConfig from './envConfig';

import './index.scss';

/* eslint-disable */
const initGA = (appHistory: History) => {
  (function (i, s, o, g, r, a, m) {
    // tslint:disable-next-line: only-arrow-functions
    i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  // allow cross-domain tracking from qpp.cms.gov to cmsgov.github.io
  window.ga('create', 'UA-15356370-63', 'auto', { 'allowLinker': true });
  window.ga('require', 'linker');
  window.ga('linker:autoLink', ['qpp.cms.gov']);

  appHistory.listen((location) => {
    window.ga('send', 'pageview', envConfig.baseUrl + location.pathname);
  });
};
/*eslint-enable */

initGA(history);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
