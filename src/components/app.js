import React from 'react';
import PropTypes from 'prop-types';
import 'uswds/dist/js/uswds.js';
import 'uswds/dist/css/uswds.min.css';
import '@cmsgov/design-system-core/dist/index.css';
import '@cmsgov/design-system-layout/dist/index.css';
import { Route } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/qpp-style/css/qpp-style.css';
import '../styles/app.css';
import '../styles/temp-grid.css';

import Header from './header';
import Routes from './routes';
import DropdownNav from './dropdown-nav';
import LeftNav from './left-nav';
import Introduction from './introduction';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';

const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

function ActiveComponent({match}) {
  return mergedRoutes[match.params.componentKey].component;
};

ActiveComponent.propTypes = {
  match: PropTypes.string.isRequired
};

// bootstrap js needs window.jQuery to be defined, but imports are always hoisted
// so we need to require (as import 'bootstrap...' would get hoisted before window.jQuery is set)
window.jQuery = window.$ = $;
require('bootstrap');

class App extends React.Component {
  render() {
    return (
      <div>
        <main id='panel'>
          <Header />
          <div className='qpp-docs-title-container'>
            <div className='content-container'>
              <a className='qpp-docs-title-back' href='https://qpp.cms.gov/developers'>&lt; back to QPP Developer Tools</a>
              <h3 className='qpp-docs-title-text'>QPP Submissions API Documentation</h3>
            </div>
          </div>
          <div className='content-container ds-l-row'>
            <div id='dropdown-nav' className='ds-l-col--12'>
              <form className='usa-form'>
                <DropdownNav />
              </form>
            </div>

            <div id='left-nav' className='ds-l-col--3 ds-u-padding-top--4'>
              <div className='content-block'>
                <ul className='ds-c-list--bare ds-u-padding-top--2'>
                  {LeftNav}
                </ul>
              </div>
            </div>

            <div className='ds-u-float--left ds-u-padding-top--4 ds-l-col--12 ds-l-sm-col--9'>
              <div className='content-block ds-u-padding--3'>
                <div className="ds-u-font-size--small ds-u-sm-font-size--small ds-u-md-font-size--base ds-u-lg-font-size--lead">
                  <Route exact path='/' component={Introduction} />
                  <Route exact path='/:componentKey' render={ActiveComponent} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <script src='/assets/js/vendor/uswds.min.js' />
        </main>
        <SubscribeModal />
      </div>
    );
  }
}

export default App;
