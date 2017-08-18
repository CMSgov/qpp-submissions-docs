import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes from './routes';

const createLinksListItems = function(pathsMap) {
  return pathsMap.paths.map((path) => {
      // <NavLink> is special version of the <Link> that will add styling
      // attributes to the rendered element when it matches the current URL
      // by applying activeClassName.
      return <li key={path.path}>
        <NavLink to={"/" + path.path} activeClassName=''>{path.linkText}</NavLink>
      </li>
  });
}

class NavSection extends React.Component {
  render() {
    return <li className="ds-c-vertical-nav__item">
      <ul className="ds-c-vertical-nav__subnav">
        <li><b>{this.props.name}</b></li>
        {createLinksListItems(Routes[this.props.groupIndex])}
      </ul>
    </li>;
  }
}

const LeftNav = Routes.map((routeGroup, index) => {
  return <NavSection key={routeGroup.groupTitle} groupIndex={index} name={routeGroup.groupTitle} />;
});

export default LeftNav;
