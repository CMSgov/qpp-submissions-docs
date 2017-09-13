import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Basic3 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Response</Tab>
        </TabList>
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

export default Basic3;
