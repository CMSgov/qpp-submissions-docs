import React from 'react';
import { withRouter } from 'react-router-dom'

import Routes from './routes';

// TODO(aimee): DRY this up with app.jsx
const mergedRoutes = Object.values(Routes).reduce(function(result, routesGroup) {
  return Object.assign(result, routesGroup);
}, {});

const DropdownListItems = Object.keys(mergedRoutes).reduce(function(result, itemName) {
  return result.concat(<option key={itemName} value={itemName}>{ itemName }</option>)
}, []);

class DropdownNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname.replace('/', '')
    };

    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }

  handleDropdownSelect(e) {
    e.preventDefault();
    this.props.history.push(e.target.value);
  }

  render() {
    return <select id="options" value={this.state.path} onChange={this.handleDropdownSelect}>
      {DropdownListItems}
    </select>
  }
}

export default withRouter(DropdownNav);
