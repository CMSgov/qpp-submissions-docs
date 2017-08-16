import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes from './routes';

const createLinksListItems = function(pathsMap) {
  return Object.keys(pathsMap).reduce((result, pathKeyName) => {
    return result.concat(
      // <NavLink> is special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
      <li key={pathKeyName}>
        <NavLink to={"/" + pathKeyName} activeClassName="usa-current">{pathsMap[pathKeyName].linkText}</NavLink>
      </li>
    )
  }, []);
}

class NavSection extends React.Component {
  render() {
    return <li>
      <span className="left-nav-label"><b>{this.props.name.toUpperCase()}</b></span>
      <ul className="usa-sidenav-list">
        {createLinksListItems(Routes[this.props.name])}
      </ul>
    </li>;
  }
}

const LeftNav = Object.keys(Routes).reduce(function(result, sectionName) {
  return result.concat(<NavSection key={sectionName} name={sectionName}/>)
}, []);

export default LeftNav;
