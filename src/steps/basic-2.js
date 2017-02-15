import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Basic2 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass} onSelect={this.handleSelect} selectedIndex={0}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>{`{
  "submissionId": "6809a184-1588-4356-a28c-3eef95d5659f",
  "category": "aci",
  "source": "provider",
  "performanceStart": "2016-01-01",
  "performanceEnd": "2016-06-01",
  "measurements": [
    {
      "measureId": "ACI_HIE_3",
      "value": {
        "numerator": 1,
        "denominator": 2
      }
    },
    {
      "measureId": "ACI_PHCDRR_5",
      "value": true
    }
  ]
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code: <code>201</code></p>
          <p>Response body:</p>
          <pre>
{`{
  "data": {
    "measurementSet": {
      "id": "5444423d-26b9-47b4-80e5-499d3fbb827a",
      "submissionId": "6809a184-1588-4356-a28c-3eef95d5659f",
      "category": "aci",
      "source": "provider",
      "measureSet": null,
      "performanceStart": "2016-01-01",
      "performanceEnd": "2016-06-01",
      "measurements": [
        {
          "id": "19ed9c66-27f3-414a-85bc-a19d994b3adc",
          "measurementSetId": "5444423d-26b9-47b4-80e5-499d3fbb827a",
          "measureId": "ACI_HIE_3",
          "value": {
            "numerator": 1,
            "denominator": 2
          }
        },
        {
          "id": "7f396ed5-1b19-41eb-82e8-d9305773197b",
          "measurementSetId": "5444423d-26b9-47b4-80e5-499d3fbb827a",
          "measureId": "ACI_PHCDRR_5",
          "value": true
        }
      ]
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Basic2;