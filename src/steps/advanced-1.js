import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Advanced1 extends React.PureComponent {
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
  "nationalProviderIdentifier": "9876543210",
  "performanceYear": 2016,
  "measurementSets": [
    {
      "category": "aci",
      "source": "provider",
      "performanceStart": "2016-01-01",
      "performanceEnd": "2016-06-01",
      "measurements": [
        {
          "measureId": "ACI_INFBLO_1",
          "value": true
        },
        {
          "measureId": "ACI_ONCDIR_1",
          "value": true
        },
        {
          "measureId": "ACI_EP_1",
          "value": {
            "numerator": 100,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_PPHI_1",
          "value": true
        },
        {
          "measureId": "ACI_PEA_1",
          "value": {
            "numerator": 50,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_HIE_1",
          "value": {
            "numerator": 10,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_HIE_2",
          "value": {
            "numerator": 20,
            "denominator": 100
          }
        }
      ]
    }
  ]
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>422 Unprocessable Entity</pre>
          <p>Response body:</p>
          <pre>
{`{
  "error": {
    "type": "DuplicateEntryError",
    "message": "Duplicate entry for key unique_performance_year_entity_type_npi_and_tin_encrypted"
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced1;