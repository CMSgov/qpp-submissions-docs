import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Routes from './routes';

import '../styles/left-nav.css';

const leftNavPaddingClasses = 'ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1';

const createLinksListItems = function(pathsMap) {
  const linkClasses = 'ds-c-vertical-nav__label ' + leftNavPaddingClasses;

  return pathsMap.paths.map((path) => {
    let linkComponent;
    if (!path.external) {
      linkComponent = <NavLink to={path.path} exact={path.exact} className={linkClasses} activeClassName='ds-c-vertical-nav__label--current'>{path.linkText}</NavLink>;
    } else {
      linkComponent = <a href={path.path} className={linkClasses}>{path.linkText}</a>;
    }
      // <NavLink> is special version of the <Link> that will add styling
      // attributes to the rendered element when it matches the current URL
      // by applying activeClassName.
    return <li className='ds-c-vertical-nav__item' key={path.path}>{linkComponent}</li>;
  });
};

class NavSection extends React.Component {
  render() {
    return <li>
      <ul className='ds-c-vertical-nav left-nav'>
        <li className={'ds-c-vertical-nav__item ds-u-font-weight--semibold ' + leftNavPaddingClasses}>{this.props.name.toUpperCase()}</li>
        {createLinksListItems(Routes[this.props.groupIndex])}
      </ul>
    </li>;
  }
}

NavSection.propTypes = {
  name: PropTypes.string.isRequired,
  groupIndex: PropTypes.number.isRequired
};

const LeftNav = Routes.map((routeGroup, index) => {
  return <NavSection key={routeGroup.groupTitle} groupIndex={index} name={routeGroup.groupTitle} />;
});

export default LeftNav;
