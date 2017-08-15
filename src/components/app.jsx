import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import { Route } from 'react-router-dom'

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import Routes from './routes';
import LeftNav from './left-nav';
import Introduction from './introduction';

const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

const getComponent = ({ match, location }) => {
  return <div>{mergedRoutes[match.params.componentKey].component}</div>
}

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="container temp-nav ds-h3 ds-u-margin-y--3">
          <a href="/qpp-submissions-docs" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
        </div>
        <div className="container">
          <div className="temp-grid-container">
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
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
