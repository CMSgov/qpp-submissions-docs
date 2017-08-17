import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = 'technical-details-pane';

class Basic3 extends React.PureComponent {
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
        <TabPanel />
        <TabPanel>
          <p>Response code:</p>
          <pre>200 OK</pre>
          <p>Response body:</p>
          <pre>{`{
  "data": {
    "score": {
      "name": "final",
      "title": "Final Score",
      "detail": "",
      "value": 3.75,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of final score",
          "detail": "Scoring based on measurement set \\"88345eab-0082-4a58-a4e8-e3140c7f48ee\\" from submission method \\"cmsWebInterface\\" with weight of 15%.",
          "value": 3.75,
          "original": {
            "name": "ia",
            "title": "Improvement Activities Score",
            "value": 10,
            "parts": [
              {
                "name": "IA_EPA_4",
                "title": "Additional improvements in access as a result of QIN/QIO TA",
                "value": 10
              }
            ]
          }
        },
        {
          "name": "aci",
          "title": "ACI component of final score",
          "detail": "No measurement set to score.",
          "value": 0
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

Basic3.propTypes = {
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

export default Basic3;
