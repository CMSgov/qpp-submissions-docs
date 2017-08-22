import React from 'react';
import { withRouter } from 'react-router-dom'

import Routes from './routes';

const DropdownListItems = Object.keys(Routes.mergedRoutes).reduce(function(result, itemName) {
  return result.concat(<option key={itemName} value={itemName}>{ Routes.mergedRoutes[itemName].linkText }</option>)
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
