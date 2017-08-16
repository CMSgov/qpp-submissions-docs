import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import { Route } from 'react-router-dom';

import $ from 'jquery';
import 'uswds/dist/js/uswds.js';

import '@cmsgov/design-system-core/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/qpp-style/css/qpp-style.css';
import '../styles/app.css';
import '../styles/temp-grid.css';

import Header from './header';
import Routes from './routes';
import LeftNav from './left-nav';
import Introduction from './introduction';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';

const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

function getComponent({ match, location }) {
  return <div>{mergedRoutes[match.params.componentKey].component}</div>
}

// bootstrap js needs window.jQuery to be defined, but imports are always hoisted
// so we need to require (as import 'bootstrap...' would get hoisted before window.jQuery is set)
window.jQuery = window.$ = $;
require('bootstrap');

class App extends React.Component {
  render() {
    return (
      <div>
        <main id="panel">
          <Header />
          <div className="qpp-docs-title-container">
            <div className="content-container">
              <a className="qpp-docs-title-back" href="https://qpp.cms.gov/developers">&lt; back to QPP Developer Tools</a>
              <h3 className="qpp-docs-title-text">QPP Submissions API Documentation</h3>
            </div>
          </div>
          <div className="content-block">
            <div className="content-container">
              <div className="ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
                <ul className="ds-c-vertical-nav__subnav">
                  {LeftNav}
                </ul>
              </div>
              <div className="ds-u-float--left ds-u-padding--1 page">
                <div className="ds-u-measure--wide">
                  <Route exact path="/" component={Introduction} />
                  <Route exact path="/:componentKey" render={getComponent}/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <script src="/assets/js/vendor/uswds.min.js"></script>
        </main>
        <SubscribeModal />
      </div>
    );
  }
}

export default App;
