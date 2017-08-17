import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes from './routes';

const createLinksListItems = function(pathsMap) {
  return Object.keys(pathsMap).reduce((result, pathKeyName) => {
    return result.concat(
      // <NavLink> is special version of the <Link> that will add styling
      // attributes to the rendered element when it matches the current URL
      // by applying activeClassName.
      <li key={pathKeyName}>
        <NavLink to={"/" + pathKeyName} className='ds-u-padding-right--3 ds-u-padding-left--3' activeClassName="usa-current">{pathsMap[pathKeyName].linkText}</NavLink>
      </li>
    )
  }, []);
}

class NavSection extends React.Component {
  render() {
    return <li>
      <ul className="usa-sidenav-list">
        <li className='ds-u-padding-right--3 ds-u-padding-left--3'>{this.props.name.toUpperCase()}</li>
        {createLinksListItems(Routes[this.props.name])}
      </ul>
    </li>;
  }
}

const LeftNav = Object.keys(Routes).reduce(function(result, sectionName) {
  return result.concat(<NavSection key={sectionName} name={sectionName}/>)
}, []);

export default LeftNav;
