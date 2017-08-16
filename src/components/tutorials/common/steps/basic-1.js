import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = 'technical-details-pane';

class Basic1 extends React.PureComponent {
  render() {
    return (
      <Tabs
        className={cssClass}
        onSelect={this.props.onSelect}
        selectedIndex={this.props.tabIndex}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {`{
  "programName": "mips",
  "entityType": "individual",
  "taxpayerIdentificationNumber": "000456789",
  "nationalProviderIdentifier": "0123456789",
  "performanceYear": 2016
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>201 Created</pre>
          <p>Response body:</p>
          <pre>{`{
  "data": {
    "submission": {
      "id": "b6423273-d3a3-42ef-9728-1871b246477e",
      "createdAt": "2017-02-13T18:45:58Z",
      "updatedAt": "2017-02-13T18:45:58Z",
      "programName": "mips",
      "entityType": "individual",
      "taxpayerIdentificationNumber": "000456789",
      "nationalProviderIdentifier": "0123456789",
      "entityId": null,
      "performanceYear": 2016,
      "measurementSets": []
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

Basic1.propTypes = {
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

export default Basic1;
