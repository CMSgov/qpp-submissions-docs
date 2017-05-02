import React from 'react';

import Benchmark from './schemas/benchmark';
import Benchmarks from './schemas/benchmarks';
import ExampleDocs from './examples/example-docs';
import Measurements from './schemas/measurements';
import MeasurementSets from './schemas/measurement-sets';
import Scoring from './scoring';
import Submission from './schemas/submission';
import '../../styles/api-reference/api-reference.css';

class SchemaDetail extends React.Component {
  render() {
    const schemaName = this.props.name;

    if (schemaName === 'scoring') {
      return <Scoring/>
    } else if (schemaName === 'benchmarks') {
      return <Benchmarks/>;
    } else if (schemaName === 'benchmark') {
      return <Benchmark/>;
    } else if (schemaName === 'measurements') {
      return <Measurements/>;
    } else if (schemaName === 'measurement-sets') {
      return <MeasurementSets/>;
    } else if (schemaName === 'example') {
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
      name: props.name,
      hash: props.hash
    };

    this.showSchemaDetail = this.showSchemaDetail.bind(this);
  }

  showSchemaDetail(event) {
    // the hash of an anchor tag or stored in data
    const nameAndHash = event.target.hash || event.target.dataset.hash;
    window.location.hash = nameAndHash.split("#")[1];
    this.setState({
      name: nameAndHash.split("#")[0],
      hash: window.location.hash
    });
  }

  render() {
    return (
      <div>
      <div className="temp-grid-container">
        <div className="ds-u-float--left ds-u-padding-right--6 ds-u-padding-top--2">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>APIs & Reference</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#" data-hash="submission"
              onClick={this.showSchemaDetail}>Submissions</a></li>
              <li><a href="#" data-hash="measurement-sets"
              onClick={this.showSchemaDetail}>MeasurementSets</a></li>
              <li><a href="#" data-hash="measurements"
              onClick={this.showSchemaDetail}>Measurements</a>
                <ul>
                  <li><a href="#" data-hash="measurements#boolean"
                         onClick={this.showSchemaDetail}>Boolean</a></li>
                  <li><a href="#" data-hash="measurements#proportion"
                         onClick={this.showSchemaDetail}>Proportion</a></li>
                  <li><a href="#" data-hash="measurements#single-performance-rate"
                         onClick={this.showSchemaDetail}>Single-Performance Rate</a></li>
                  <li><a href="#" data-hash="measurements#multi-performance-rate"
                         onClick={this.showSchemaDetail}>Multi-Performance Rate</a></li>
                </ul>
              </li>
              <li>
                <a href="#" data-hash="benchmarks"
                   onClick={this.showSchemaDetail}>Benchmarks</a>
              </li>
              <li>
                <a href="#" data-hash="benchmark"
                   onClick={this.showSchemaDetail}>Benchmark</a>
                <ul>
                  <li><a href="#" data-hash="benchmark#historical-benchmarks"
                         onClick={this.showSchemaDetail}>Historical Benchmarks</a>
                  </li>
                  <li><a href="#" data-hash="benchmark#current-benchmarks"
                         onClick={this.showSchemaDetail}>Current Benchmarks</a>
                  </li>
                  <li><a href="#" data-hash="benchmark#benchmark-calculations"
                         onClick={this.showSchemaDetail}>Benchmark Calculations</a>
                  </li>
                </ul>
              </li>
              <li><a href="#" data-hash="scoring"
                     onClick={this.showSchemaDetail}>Scoring</a></li>
            </ul>
            <li className="ds-c-vertical-nav__item"><b>Examples</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#" data-hash="example"
              onClick={this.showSchemaDetail}>Submission JSON & XML</a></li>
            </ul>
          </ul>
        </div>
        <div className="ds-u-float--left ds-u-padding--1 page">
          <SchemaDetail name={this.state.name}/>
        </div>
      </div>
      </div>
    );
  }
}
