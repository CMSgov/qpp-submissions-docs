import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import { Route, NavLink } from 'react-router-dom'

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import DeveloperPreview from './developer-preview';
import Introduction from './introduction';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Schemas from './api-reference/api-reference';

// linkText only becomes relevant when building links, which we're not doing
// (yet).
const topicsPathsMap = {
  'introduction': {
    linkText: 'Introduction',
    component: <Introduction />
  },
  'developer-preview': {
    linkText: 'Getting a Key',
    component: <DeveloperPreview />
  },
  'schemas': {
    linkText: 'Schemas',
    component: <Schemas />
  }
}

const guidesPathsMap = {
  'tutorial': {
    linkText: 'Quickstart',
    component: <BasicTutorial />
  },
  'advanced-tutorial':{
    linkText: 'Advanced Tutorial',
    component: <AdvancedTutorial />
  }
}

const allPaths = Object.assign({}, topicsPathsMap, guidesPathsMap)

const getComponent = ({ match }) => (
  <div>{allPaths[match.params.componentKey].component}</div>
)

const createLinksListItems = function(pathsMap) {
  var linkListItems = [];
  Object.keys(pathsMap).forEach((pathKeyName) => {
    linkListItems.push(
      // <NavLink> is special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
      <li key={pathKeyName}><NavLink to={"/" + pathKeyName} activeClassName="active">{pathsMap[pathKeyName].linkText}</NavLink></li>
    )
  });
  return linkListItems;
}

class App extends React.PureComponent {
  render() {
    const topicsNavItems = createLinksListItems(topicsPathsMap);
    const guidesNavItems = createLinksListItems(guidesPathsMap);

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
                <li className="ds-c-vertical-nav__item"><b>TOPICS</b></li>
                <ul className="ds-c-vertical-nav__subnav">
                  {topicsNavItems}
                </ul>
                <li className="ds-c-vertical-nav__item"><b>GUIDES</b></li>
                <ul className="ds-c-vertical-nav__subnav">
                  {guidesNavItems}
                </ul>
              </ul>
            </div>
            <div className="ds-u-float--left ds-u-padding--1 page">
              <Route exact path="/" component={Introduction} />
              <Route path="/:componentKey" component={getComponent} />
            </div>
          </div>
        </div>
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
