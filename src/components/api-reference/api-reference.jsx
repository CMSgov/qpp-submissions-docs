import React from 'react';

import Benchmarks from './schemas/benchmarks';
import ExampleDocs from './example-docs';
import Measurements from './schemas/measurements';
import MeasurementSets from './schemas/measurement-sets';
import Scoring from './scoring';
import Provider from './provider';
import Submission from './schemas/submission';
import '../../styles/api-reference/api-reference.css';

const ReferenceNavBarItemsMap = {
  "submission": <Submission />,
  "measurement-sets": <MeasurementSets />,
  "measurements": <Measurements />,
  "benchmarks": <Benchmarks />,
  "scoring": <Scoring />,
  "provider-profile-stub": <Provider />
};

const SamplesNavBarItemsMap = {
  "example-submission-JSON-&-XML": <ExampleDocs />
};

const allNavItems = Object.assign({}, ReferenceNavBarItemsMap, SamplesNavBarItemsMap);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function keyToTitle(key) {
  return key.split("-").map((string) => capitalize(string)).join(" ");
}

class NavBarListItem extends React.Component {
  render() {
    return <li className={ this.props.isActive ? 'active' : '' } onClick={this.props.onClick}>
      <a name={this.props.name} href="javascript:void(0);">{ keyToTitle(this.props.name) }</a>
    </li>
  }
}

export default class ApiReference extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: "submission"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }

  handleClick(e) {
    // REVIEW: Should this also update the selected dropdown item?
    this.setState({ activeComponent: e.target.name })
  }

  handleDropdownSelect(e) {
    this.setState({ activeComponent: e.target.value });
  }

  render() {
    var referenceNavListItems = [];
    Object.keys(ReferenceNavBarItemsMap).forEach((itemName) => {
      referenceNavListItems.push(
        // the onClick property sends the NavBarListItem an onClick property which is the handleClick function
        <NavBarListItem key={itemName} name={itemName} isActive={ this.state.activeComponent === itemName } onClick={this.handleClick} />
      )
    });
    var samplesNavListItems = [];
    Object.keys(SamplesNavBarItemsMap).forEach((itemName) => {
      samplesNavListItems.push(
        // the onClick property sends the NavBarListItem an onClick property which is the handleClick function
        <NavBarListItem key={itemName} name={itemName} isActive={ this.state.activeComponent === itemName } onClick={this.handleClick} />
      )
    });
    var dropdownListItems = [];
    Object.keys(allNavItems).forEach((itemName) => {
      dropdownListItems.push(<option value={itemName}>{ keyToTitle(itemName) }</option>)
    });

    return (
      <div className="ds-l-container">
      <div className="ds-l-row">
        <div id="dropdown-nav">
          <form className="usa-form">
            <select value={this.state.value} onChange={this.handleDropdownSelect} id="options">
              {dropdownListItems}
            </select>
          </form>
        </div>

        <div id="left-nav" className="ds-l-col--6 ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>REFERENCE</b></li>
            <ul className="ds-c-vertical-nav__subnav usa-sidenav-list">
              {referenceNavListItems}
            </ul>
            <li className="ds-c-vertical-nav__item"><b>SAMPLES</b></li>
            <ul className="ds-c-vertical-nav__subnav usa-sidenav-list">
              {samplesNavListItems}
            </ul>
          </ul>
        </div>
        <div className="ds-u-float--left ds-u-padding--1 ds-l-col--6">
          { allNavItems[this.state.activeComponent] }
        </div>
      </div>
      </div>
    );
  }
}
