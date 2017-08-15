import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import { Route, NavLink } from 'react-router-dom'

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import Routes from './routes';
import Introduction from './introduction';

const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

const createLinksListItems = function(pathsMap) {
  return Object.keys(pathsMap).reduce((result, pathKeyName) => {
    return result.concat(
      // <NavLink> is special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
      <li key={pathKeyName}>
        <NavLink to={"/" + pathKeyName} activeClassName="active">{pathsMap[pathKeyName].linkText}</NavLink>
      </li>
    )
  }, []);
}

class NavSection extends React.Component {
  render() {
    return <li className="ds-c-vertical-nav__item">
      <b>{this.props.name.toUpperCase()}</b>
      <ul className="ds-c-vertical-nav__subnav">
        {createLinksListItems(Routes[this.props.name])}
      </ul>
    </li>;
  }
}

const LeftNav = Object.keys(Routes).reduce(function(result, sectionName) {
  return result.concat(<NavSection key={sectionName} name={sectionName}/>)
}, []);

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
