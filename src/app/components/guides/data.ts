import { ICodeTab } from '../../../shared/code-tab';
import { IApiExample } from '../../../shared';

interface ISteps {
  [k: string]: ICodeTab[];
}

interface IApiExamples {
  [k: string]: IApiExample;
}

export const steps: ISteps = {
  advanced1: [
    {
      tab: 'Request',
      code: `{
  "submissionId": "0313d351-624d-409b-837f-500d603819aa",
  "measurements": [
    {
      "measureId": "IA_EPA_10",
      "value": true
    }
  ],
  "category": "ia",
  "submissionMethod": "registry",
  "performanceStart": "2018-01-01",
  "performanceEnd": "2018-06-01"
}`,
    },
    {
      tab: 'Response',
      code: `{
  "error": {
    "type": "ValidationError",
    "message": "invalid measurement-set object",
    "details": [
      {
        "message": "field 'measureId' in MeasurementSet.measurements[0] is invalid: IA_EPA_10 does not exist, see qpp-measures-data for list of valid measureIds",
        "path": "$.measurements[0].measureId"
      }
    ]
  }
}`,
      response: '422 Un-processable Entity',
    },
  ],
  advanced2: [
    {
      tab: 'Request',
      code: `{
  "submissionId": "0313d351-624d-409b-837f-500d603819aa",
  "measurements": [
    {
      "measureId": "IA_EPA_3",
      "value": true
    }
  ],
  "category": "ia",
  "submissionMethod": "registry",
  "performanceStart": "2018-01-01",
  "performanceEnd": "2018-06-01"
}`,
    },
    {
      tab: 'Response',
      response: '201 Created',
      code: `{
  "data": {
    "measurementSet": {
      "id": "0313d351-a094-4dc2-b632-23cd88bffb5e",
      "createdAt": "2018-08-21T13:55:29Z",
      "updatedAt": "2018-08-21T14:07:51Z",
      "submissionId": "0313d351-624d-409b-837f-500d603819aa",
      "category": "ia",
      "submissionMethod": "registry",
      "measureSet": null,
      "submitterId": "1234567",
      "submitterType": "organization",
      "performanceStart": "2018-01-01",
      "performanceEnd": "2018-06-01",
      "measurements": [
        {
          "id": "0313d5c6-1a2d-4564-9ac3-d006bf03efac",
          "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
          "measureId": "IA_EPA_3",
          "value": true,
          "performanceStart": null,
          "performanceEnd": null
        },
        {
          "id": "0313d351-10bd-4419-a593-ece163a67520",
          "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
          "measureId": "IA_EPA_4",
          "value": true,
          "performanceStart": null,
          "performanceEnd": null
        }
      ]
    }
  }
}`,
    },
  ],
  advanced3: [
    {
      tab: 'Response',
      response: '200 OK',
      code: `{
  "data": {
    "score": {
      "name": "total",
      "title": "Total Score",
      "detail": "0.45.0",
      "value": 15,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of total score",
          "detail": "Scoring based on weight of 15%.",
          "value": 15,
          "original": {
            "name": "ia",
            "value": 40,
            "detail": "Picked the highest scoring measurement set registry",
            "parts": [
              {
                "name": "ia",
                "value": 40,
                "title": "Improvement Activities Score",
                "detail": "registry",
                "parts": [
                  {
                    "name": "IA_EPA_3",
                    "title": "Collection and use of patient experience and satisfaction data on access",
                    "value": 20,
                    "metadata": {
                      "measurementId": "0313d5c6-1a2d-4564-9ac3-d006bf03efac",
                      "maxContribution": 40,
                      "weight": "medium"
                    }
                  },
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
            "unroundedScoreValue": 15,
            "maxContribution": 15
          }
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
}`},
  ],
  advanced4: [
    {
      tab: 'Request',
      code: `{
  "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
  "measureId": "IA_EPA_4",
  "value": false
}`,
    },
    {
      tab: 'Response',
      response: '200 OK',
      code: `{
  "data": {
    "measurement": {
      "id": "0313d351-10bd-4419-a593-ece163a67520",
      "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
      "measureId": "IA_EPA_4",
      "value": false,
      "performanceStart": null,
      "performanceEnd": null
    }
  }
}`,
    },
  ],
  advanced5: [
    {
      tab: 'Response',
      response: '200 OK',
      code: `{
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
                    "name": "IA_EPA_3",
                    "title": "Collection and use of patient experience and satisfaction data on access",
                    "value": 20,
                    "metadata": {
                      "measurementId": "0313d5c6-1a2d-4564-9ac3-d006bf03efac",
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
}`,
    },
  ],
  basic1: [
    {
      tab: 'Request',
      code: `{
  "submission": {
    "entityType": "individual",
    "taxpayerIdentificationNumber": "000456789",
    "nationalProviderIdentifier": "000000002",
    "performanceYear": 2018
  },
  "measurements": [
    {
      "measureId": "IA_EPA_4",
      "value": true
    }
  ],
  "category": "ia",
  "submissionMethod": "registry",
  "performanceStart": "2018-01-01",
  "performanceEnd": "2018-06-01"
}`,
    },
    {
      tab: 'Response',
      response: '201 Created',
      code: `{
  "data": {
    "measurementSet": {
      "id": "0313d351-a094-4dc2-b632-23cd88bffb5e",
      "createdAt": "2018-08-21T13:55:29Z",
      "updatedAt": "2018-08-21T13:55:29Z",
      "submissionId": "0313d351-624d-409b-837f-500d603819aa",
      "category": "ia",
      "submissionMethod": "registry",
      "measureSet": null,
      "submitterId": "1234567",
      "submitterType": "organization",
      "performanceStart": "2018-01-01",
      "performanceEnd": "2018-06-01",
      "measurements": [
        {
          "id": "0313d351-10bd-4419-a593-ece163a67520",
          "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
          "measureId": "IA_EPA_4",
          "value": true,
          "performanceStart": null,
          "performanceEnd": null
        }
      ]
    }
  }
}`,
    },
  ],
  basic2: [
    {
      tab: 'Response',
      response: '200 OK',
      code: `{
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
}`,
    },
  ],
};

export const apiExamples: IApiExamples = {
  measurementSetsId1: {
    verb: 'PATCH',
    url: '/measurement-sets/:id',
    rows: [
      {
        row: ['Submission ID', '0313d351-624d-409b-837f-500d603819aa'],
      },
      {
        row: ['Measurement Set ID', '0313d351-a094-4dc2-b632-23cd88bffb5e'],
      },
      {
        row: ['Category', 'IA'],
      },
      {
        row: ['Submission Method', 'Registry'],
      },
      {
        row: ['Performance Start', '2018-01-01'],
      },
      {
        row: ['Performance End', '2018-06-01'],
      },
      {
        row: ['Measurements'],
        classes: ['nested-once'],
      },
      {
        row: ['Measure <code>IA_EPA_10</code>', '<code>true</code>'],
        classes: ['nested-twice'],
      },
    ],
  },
  measurementSetsId2: {
    verb: 'PATCH',
    url: '/measurement-sets/:id',
    rows: [
      {
        row: ['Submission ID', '0313d351-624d-409b-837f-500d603819aa'],
      },
      {
        row: ['Measurement Set ID', '0313d351-a094-4dc2-b632-23cd88bffb5e'],
      },
      {
        row: ['Category', 'IA'],
      },
      {
        row: ['Submission Method', 'Registry'],
      },
      {
        row: ['Performance Start', '2018-01-01'],
      },
      {
        row: ['Performance End', '2018-06-01'],
      },
      {
        row: ['Measurements'],
        classes: ['nested-once'],
      },
      {
        row: ['Measure <code>IA_EPA_3</code>', '<code>true</code>'],
        classes: ['nested-twice'],
      },
    ],
  },
  measurementsId: {
    verb: 'PATCH',
    url: '/measurements/:id',
    rows: [
      {
        row: ['Measurement ID', '0313d5c6-1a2d-4564-9ac3-d006bf03efac'],
      },
      {
        row: ['Measurement Set ID', '0313d351-a094-4dc2-b632-23cd88bffb5e'],
      },
      {
        row: ['Measure <code>IA_EPA_4</code>', '<code>false</code>'],
      },
    ],
  },
  measurementSets: {
    verb: 'POST',
    url: '/measurement-sets',
    rows: [
      {
        row: ['Entity', 'Individual'],
      },
      {
        row: ['Taxpayer Identification Number', '000456789'],
      },
      {
        row: ['National Provider Identifier', '000000002'],
      },
      {
        row: ['Performance Year', '2018'],
      },
    ],
  },
};
