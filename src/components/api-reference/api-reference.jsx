import React from 'react';

import Benchmarks from './schemas/benchmarks';
import ExampleDocs from './example-docs';
import Measurements from './schemas/measurements';
import MeasurementSets from './schemas/measurement-sets';
import Scoring from './scoring';
import Provider from './provider';
import Submission from './schemas/submission';
import '../../styles/api-reference/api-reference.css';

function sectionForHash(maybeHash) {
  const hash = maybeHash || '';
  if (hash === '#scoring') {
    return <Scoring/>;
  } else if (hash === '#provider') {
    return <Provider/>;
  } else if (hash.includes('benchmark')) {
    return <Benchmarks/>;
  } else if (hash.includes('measurements')) {
    return <Measurements/>;
  } else if (hash === '#measurement-sets') {
    return <MeasurementSets/>;
  } else if (hash === '#example') {
    return <ExampleDocs/>;
  } else {
    return <Submission/>;
  }
}

export default class ApiReference extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: props.hash
    };

    this.showSection = this.showSection.bind(this);
  }

  showSection(event) {
    this.setState({ hash: event.target.hash });
  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>APIs & Reference</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#submission"
              onClick={this.showSection}>Submissions</a></li>
              <li><a href="#measurement-sets"
              onClick={this.showSection}>MeasurementSets</a></li>
              <li><a href="#measurements"
              onClick={this.showSection}>Measurements</a>
                <ul>
                  <li><a href="#boolean-measurements"
                         onClick={this.showSection}>Boolean</a></li>
                  <li><a href="#proportion-measurements"
                         onClick={this.showSection}>Proportion</a></li>
                  <li><a href="#single-performance-rate-measurements"
                         onClick={this.showSection}>Single-Performance Rate</a></li>
                  <li><a href="#multi-performance-rate-measurements"
                         onClick={this.showSection}>Multi-Performance Rate</a></li>
                </ul>
              </li>
              <li>
                <a href="#benchmarks"
                   onClick={this.showSection}>Benchmarks</a>
                <ul>
                  <li><a href="#historical-benchmarks"
                         onClick={this.showSection}>Historical Benchmarks</a>
                  </li>
                  <li><a href="#current-benchmarks"
                         onClick={this.showSection}>Current Benchmarks</a>
                  </li>
                  <li><a href="#benchmark-calculations"
                         onClick={this.showSection}>Benchmark Calculations</a>
                  </li>
                </ul>
              </li>
              <li><a href="#scoring"
                     onClick={this.showSection}>Scoring</a></li>
              <li><a href="#provider"
                     onClick={this.showSection}>Provider Profile Stub</a></li>
            </ul>
            <li className="ds-c-vertical-nav__item"><b>Examples</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#example"
              onClick={this.showSection}>Submission JSON & XML</a></li>
              <li><a href="https://qpp-submissions-sandbox.navapbc.com/">Interactive Docs</a></li>
            </ul>
          </ul>
        </div>
        <div className="ds-u-float--left ds-u-padding--1 page">
          { sectionForHash(this.state.hash) }
        </div>
      </div>
      </div>
    );
  }
}
