import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/app';

const basePath = '/qpp-submissions-docs';
const history = createBrowserHistory({
  basename: basePath
});

/* eslint-disable */
const initGA = (history) => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  // allow cross-domain tracking from qpp.cms.gov to cmsgov.github.io
  window.ga('create', 'UA-15356370-63', 'auto', {'allowLinker': true});
  window.ga('require', 'linker');
  window.ga('linker:autoLink', ['qpp.cms.gov'] );

  history.listen((location) => {
    window.ga('send', 'pageview', basePath + location.pathname);
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
