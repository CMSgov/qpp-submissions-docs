import React from 'react';

import Benchmarks from './schemas/benchmarks';
import ExampleDocs from './example-docs';
import Measurements from './schemas/measurements';
import MeasurementSets from './schemas/measurement-sets';
import Scoring from './scoring';
import Provider from './provider';
import Submission from './schemas/submission';
import '../../styles/api-reference/api-reference.css';

const NavBarItemsMap = {
  "submission": <Submission />,
  "measurement-sets": <MeasurementSets />,
  "measurements": <Measurements />,
  "benchmarks": <Benchmarks />,
  "scoring": <Scoring />,
  "provider-profile-stub": <Provider />,
  "example-docs": <ExampleDocs />
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function keyToTitle(key) {
  return key.split("-").map((string) => capitalize(string)).join(" ");
}

export default class ApiReference extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: "submission"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ activeComponent: e.target.name })
  }

  render() {
    var navListItems = [];
    Object.keys(NavBarItemsMap).forEach((itemName) => {
      navListItems.push(
        <li className={ itemName === this.state.activeComponent ? 'active' : '' } onClick={this.handleClick}>
          <a name={itemName} href="javascript:void(0);">{ keyToTitle(itemName) }</a>
        </li>
      )
    });

    return (
      <div>
      <div className="temp-grid-container">
        <div className="ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>APIs & Reference</b></li>
            <ul className="ds-c-vertical-nav__subnav usa-sidenav-list">
              {navListItems}
            </ul>
          </ul>
        </div>
        <div className="ds-u-float--left ds-u-padding--1 page">
          { NavBarItemsMap[this.state.activeComponent] }
        </div>
      </div>
      </div>
    );
  }
}
