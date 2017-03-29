import React from 'react';

import TechnicalDetailsPane from '../technical-details-pane';
import InlineApiExample from '../inline-api-example';
import Submission from './submission';
import Measurements from './measurements';
import MeasurementSets from './measurement-sets';
import ExampleDocs from './example-docs';
import './schemas.css';

class SchemaDetail extends React.Component {
  render() {
    var schemaName = this.props.name;
    if (schemaName === 'measurements') {
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

class Schemas extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };

    this.showSchemaDetail = this.showSchemaDetail.bind(this);
  }

  showSchemaDetail(event) {
    // the hash of an anchor tag or stored in data
    const name = event.target.hash || event.target.dataset.hash;
    this.setState({
      name
    });
  }

  render() {
    return (
      <div>
      <div className="temp-grid-container">
        <div className="ds-u-float--left ds-u-padding--2 ds-u-padding-right--6">
          <ul className="ds-c-vertical-nav__subnav">
            <li className="ds-c-vertical-nav__item"><b>APIs & Reference</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#" data-hash="submission"
              onClick={this.showSchemaDetail}>Submissions</a></li>
              <li><a href="#" data-hash="measurement-sets"
              onClick={this.showSchemaDetail}>MeasurementSets</a></li>
              <li><a href="#" data-hash="measurements"
              onClick={this.showSchemaDetail}>Measurements</a></li>
              <ul>
                <li><a href="#" data-hash="measurements"
                onClick={this.showSchemaDetail}>Boolean</a></li>
                <li><a href="#" data-hash="measurements"
                onClick={this.showSchemaDetail}>Proportion</a></li>
                <li><a href="#" data-hash="measurements"
                onClick={this.showSchemaDetail}>Performance Rate</a></li>
              </ul>
            </ul>
            <li className="ds-c-vertical-nav__item"><b>Example Submission</b></li>
            <ul className="ds-c-vertical-nav__subnav">
              <li><a href="#" data-hash="example"
              onClick={this.showSchemaDetail}>Example</a></li>
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

export default Schemas;
