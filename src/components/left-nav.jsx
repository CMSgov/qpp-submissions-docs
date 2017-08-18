import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes from './routes';

const createLinksListItems = function(pathsMap) {
  return pathsMap.paths.map((path) => {
      // <NavLink> is special version of the <Link> that will add styling
      // attributes to the rendered element when it matches the current URL
      // by applying activeClassName.
      return <li key={path.path}>
        <NavLink to={"/" + path.path} className='ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1 ds-u-padding-bottom--1' activeClassName="usa-current">{path.linkText}</NavLink>
      </li>
  });
}

class NavSection extends React.Component {
  render() {
    return <li>
      <ul className="usa-sidenav-list">
        <li className='ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1 ds-u-font-weight--semibold'>{this.props.name.toUpperCase()}</li>
        {createLinksListItems(Routes[this.props.groupIndex])}
      </ul>
    </li>;
  }
}

const LeftNav = Routes.map((routeGroup, index) => {
  return <NavSection key={routeGroup.groupTitle} groupIndex={index} name={routeGroup.groupTitle} />;
});

export default LeftNav;
