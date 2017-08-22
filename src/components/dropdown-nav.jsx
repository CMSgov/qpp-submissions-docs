import React from 'react';
import { withRouter } from 'react-router-dom'

import Routes from './routes';

const DropdownListItems = Routes.mergedRoutes.reduce(function(result, routeObject) {
  return result.concat(<option key={routeObject.path} value={routeObject.path}>{ routeObject.linkText }</option>)
}, []);

class DropdownNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }

  handleDropdownSelect(e) {
    e.preventDefault();
    this.props.history.push(e.target.value);
  }

  render() {
    return <select id="options" className='ds-c-field ds-c-field--select' value={this.props.location.pathname} onChange={this.handleDropdownSelect}>
      {DropdownListItems}
    </select>
  }
}

export default withRouter(DropdownNav);
