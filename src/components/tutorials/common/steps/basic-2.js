import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Basic2 extends React.PureComponent {
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
      "name": "total",
      "title": "Total Score",
      "detail": "0.45.0",
      "value": 7.5,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of total score",
          "detail": "Scoring based on weight of 15%.",
          "value": 7.5,
          "original": {
            "name": "ia",
            "value": 20,
            "detail": "Picked the highest scoring measurement set registry",
            "parts": [
              {
                "name": "ia",
                "value": 20,
                "title": "Improvement Activities Score",
                "detail": "registry",
                "parts": [
                  {
                    "name": "IA_EPA_4",
                    "title": "Additional improvements in access as a result of QIN/QIO TA",
                    "value": 20,
                    "metadata": {
                      "measurementId": "0313d351-10bd-4419-a593-ece163a67520",
                      "maxContribution": 40,
                      "weight": "medium"
                    }
                  }
                ],
                "metadata": {
                  "messages": {},
                  "maxContribution": 40,
                  "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
                  "measurementSetPicked": true
                }
              }
            ]
          },
          "metadata": {
            "unroundedScoreValue": 7.5,
            "maxContribution": 15
          }
        },
        {
          "name": "feedback-ia",
          "parts": [
            {
              "name": "ia-feedback-message",
              "detail": "You could achieve full credit for this category by submitting 1 additional Medium Weighted Activity."
            },
            {
              "name": "ia-feedback-message",
              "detail": "You could achieve full credit for this category by submitting 1 additional High Weighted Activity."
            }
          ]
        }
      ],
      "metadata": {
        "messages": {},
        "maxTotalScore": 100,
        "maxHighContributionIA": 40,
        "maxMediumContributionIA": 20,
        "maxContributionIA": 15,
        "maxContributionACI": 25,
        "maxContributionQuality": 60,
        "maxContributionCost": 0
      },
      "warnings": [
        "Disclaimer: Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments."
      ],
      "errors": []
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
