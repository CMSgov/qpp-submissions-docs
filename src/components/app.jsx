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

const allPaths = Object.assign({}, Routes.topics, Routes.guides, Routes.references)

const getComponent = ({ match, location }) => {
  return <div>{allPaths[match.params.componentKey].component}</div>
}

const createLinksListItems = function(pathsMap) {
  var linkListItems = [];
  Object.keys(pathsMap).forEach((pathKeyName) => {
    linkListItems.push(
      // <NavLink> is special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
      <li key={pathKeyName}>
        <NavLink to={"/" + pathKeyName} activeClassName="active">{pathsMap[pathKeyName].linkText}</NavLink>
      </li>
    )
    // if there are sections, add ul starting and ending tags and a link for each
    // FIXME: may want this conditional to be a bit more specific, e.g. test for a non-empty array
    const subSections = pathsMap[pathKeyName].sections;
    if (subSections !== undefined) {
      linkListItems.push(
        <ul key={pathKeyName + '-subList'}>
          {Object.keys(subSections).map((subKey) => {
            return <li key={subKey}><a href={"/qpp-submissions-docs/" + pathKeyName + '#' + subKey}>{subSections[subKey].linkText}</a></li> 
          })}
        </ul>
      )
    }
  });
  return linkListItems;
}

class App extends React.PureComponent {
  render() {
    const topicsNavItems = createLinksListItems(Routes.topics);
    const guidesNavItems = createLinksListItems(Routes.guides);
    const referenceNavItems = createLinksListItems(Routes.references);

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
                <li className="ds-c-vertical-nav__item"><b>REFERENCE</b></li>
                <ul className="ds-c-vertical-nav__subnav">
                  {referenceNavItems}
                </ul>
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
