import React from 'react';

import Benchmarks from './schemas/benchmarks';
import ExampleDocs from './examples/example-docs';
import Measurements from './schemas/measurements';
import MeasurementSets from './schemas/measurement-sets';
import Scoring from './scoring';
import Provider from './provider';
import Submission from './schemas/submission';
import '../../styles/api-reference/api-reference.css';

class SchemaDetail extends React.Component {
  render() {
    const schemaName = this.props.hash;

    if (schemaName === '#scoring') {
      return <Scoring/>;
    } else if (schemaName === '#provider') {
      return <Provider/>;
    } else if (schemaName.includes('benchmark')) {
      return <Benchmarks/>;
    } else if (schemaName.includes('measurements')) {
      return <Measurements/>;
    } else if (schemaName === '#measurement-sets') {
      return <MeasurementSets/>;
    } else if (schemaName === '#example') {
      return <ExampleDocs/>;
    } else {
      return <Submission/>;
    }
  }
}

export default class Schemas extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hash: props.hash
    };
    console.log(this.state);

    this.showSchemaDetail = this.showSchemaDetail.bind(this);
  }

  showSchemaDetail(event) {
    window.location.hash = event.target.hash;
    this.setState({ hash: event.target.hash });
  }

  render() {
    return (
      <div className="temp-grid-container">
        <div className="ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>APIs & Reference</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#submission"
              onClick={this.showSchemaDetail}>Submissions</a></li>
              <li><a href="#measurement-sets"
              onClick={this.showSchemaDetail}>MeasurementSets</a></li>
              <li><a href="#measurements"
              onClick={this.showSchemaDetail}>Measurements</a>
                <ul>
                  <li><a href="#boolean-measurements"
                         onClick={this.showSchemaDetail}>Boolean</a></li>
                  <li><a href="#proportion-measurements"
                         onClick={this.showSchemaDetail}>Proportion</a></li>
                  <li><a href="#single-performance-rate-measurements"
                         onClick={this.showSchemaDetail}>Single-Performance Rate</a></li>
                  <li><a href="#multi-performance-rate-measurements"
                         onClick={this.showSchemaDetail}>Multi-Performance Rate</a></li>
                </ul>
              </li>
              <li>
                <a href="#benchmarks"
                   onClick={this.showSchemaDetail}>Benchmarks</a>
                <ul>
                  <li><a href="#historical-benchmarks"
                         onClick={this.showSchemaDetail}>Historical Benchmarks</a>
                  </li>
                  <li><a href="#current-benchmarks"
                         onClick={this.showSchemaDetail}>Current Benchmarks</a>
                  </li>
                  <li><a href="#benchmark-calculations"
                         onClick={this.showSchemaDetail}>Benchmark Calculations</a>
                  </li>
                </ul>
              </li>
              <li><a href="#scoring"
                     onClick={this.showSchemaDetail}>Scoring</a></li>
              <li><a href="#provider"
                     onClick={this.showSchemaDetail}>Provider Profile Stub</a></li>
            </ul>
            <li className="ds-c-vertical-nav__item"><b>Examples</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#example"
              onClick={this.showSchemaDetail}>Submission JSON & XML</a></li>
              <li><a href="https://qpp-submissions-sandbox.navapbc.com/">Interactive Docs</a></li>
            </ul>
          </ul>
        </div>
        <div className="ds-u-float--left ds-u-padding--1 page">
          <SchemaDetail hash={this.state.hash}/>
        </div>
      </div>
    );
  }
}
