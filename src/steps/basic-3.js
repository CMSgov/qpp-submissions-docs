import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Basic3 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass} onSelect={this.props.onSelect} selectedIndex={this.props.tabIndex}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200 OK</pre>
          <p>Response body:</p>
          <pre></pre>
          <pre>{`{
  "data": {
    "score": {
      "name": "final",
      "title": "Final Score",
      "detail": "",
      "value": 0,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of final score",
          "detail": "No measurement set to score.",
          "value": 0
        },
        {
          "name": "aci",
          "title": "ACI component of final score",
          "detail": "Scoring based on measurement set \"5444423d-26b9-47b4-80e5-499d3fbb827a\" from source \"provider\" with weight of 25%.",
          "value": 0,
          "original": {
            "name": "aci",
            "title": "Advancing Care Information Score",
            "value": 0,
            "parts": [
              {
                "name": "aci_base",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "aci_performance",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "aci_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "cehrt_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              }
            ],
            "warnings": []
          }
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

export default Basic3;