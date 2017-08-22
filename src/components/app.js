import React from 'react';
import 'uswds/dist/js/uswds.js';
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
import Footer from './footer';
import SubscribeModal from './subscribe-modal';
import Introduction from './introduction';

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
                <Route path='/' exact={true} component={Introduction} />
                {Routes.mergedRoutes.map(({path, exact, component}, index) => (
                  <Route
                    key={index}
                    path={path}
                    exact={exact}
                    component={component}
                    />
                ))}
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
