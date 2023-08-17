import { ICodeTab } from '../../../shared/code-tab';
import { IApiExample } from '../../../shared';

interface ISteps {
  [k: string]: ICodeTab[];
}

interface IApiExamples {
  [k: string]: IApiExample;
}

export const steps: ISteps = {
  advanced2: [
    {
      tab: 'Request',
      code: `{
  "measurements": [
    {
      "measureId": "001",
      "value": {
        "isEndToEndReported": false,
        "performanceMet": 36,
        "eligiblePopulationExclusion": 0,
        "eligiblePopulationException": 0,
        "performanceNotMet": 120,
        "eligiblePopulation": 156
      }
    }
  ],
  "performanceStart": "2023-01-01",
  "performanceEnd": "2023-12-31"
}`,
    },
    {
      tab: 'Response',
      response: '201 Created',
      code: `{
  "data": {
    "measurementSet": {
      "id": "086dad28-907a-4e88-af73-5c7ed2e6764e",
      "createdAt": "2023-08-17T11:18:00Z",
      "updatedAt": "2023-08-17T11:32:15Z",
      "submissionId": "086dad28-0477-4b41-8c05-77dd98d41d6f",
      "category": "quality",
      "submissionMethod": "registry",
      "measureSet": null,
      "submitterId": "12c6258f-86db-492c-8637-4ff2668164b5",
      "submitterType": "organization",
      "programName": "mips",
      "practiceId": "",
      "practiceDetails": null,
      "cehrtId": "",
      "suppressed": false,
      "source": null,
      "performanceStart": "2023-01-01",
      "performanceEnd": "2023-12-31",
      "measurements": [
        {
          "id": "086dad28-4bcb-4649-a4fd-04ad8426df77",
          "measurementSetId": "086dad28-907a-4e88-af73-5c7ed2e6764e",
          "measureId": "047",
          "value": {
            "isEndToEndReported": false,
            "eligiblePopulationExclusion": 0,
            "eligiblePopulationException": 0,
            "performanceNotMet": 36,
            "eligiblePopulation": 156,
            "performanceMet": 120,
            "performanceRate": 76.92,
            "reportingRate": 100,
            "caseCount": 156,
            "performanceRateNumerator": 76.92,
            "performanceRateDenominator": 1
          }
        },
        {
          "id": "086db12c-490d-484d-8c7a-1d378bf0a71f",
          "measurementSetId": "086dad28-907a-4e88-af73-5c7ed2e6764e",
          "measureId": "001",
          "value": {
            "isEndToEndReported": false,
            "eligiblePopulationExclusion": 0,
            "eligiblePopulationException": 0,
            "performanceNotMet": 120,
            "eligiblePopulation": 156,
            "performanceMet": 36,
            "performanceRate": 23.08,
            "reportingRate": 100,
            "caseCount": 156,
            "performanceRateNumerator": 23.08,
            "performanceRateDenominator": 1
          }
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
}`,
    },
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
  "category": "quality",
  "submissionMethod": "registry",
  "performanceStart": "2023-01-01",
  "performanceEnd": "2023-12-31",
  "programName": "mips",
  "submission": {
    "entityType": "group",
    "taxpayerIdentificationNumber": "000000002",
    "performanceYear": 2023
  },
  "measurements": [
    {
      "measureId": "047",
      "value": {
        "isEndToEndReported": false,
        "performanceMet": 120,
        "eligiblePopulationExclusion": 0,
        "eligiblePopulationException": 0,
        "performanceNotMet": 36,
        "eligiblePopulation": 156
      }
    }
  ]
}`,
    },
    {
      tab: 'Response',
      response: '201 Created',
      code: `{
  "data": {
    "measurementSet": {
      "id": "086dad28-907a-4e88-af73-5c7ed2e6764e",
      "createdAt": "2023-08-17T11:18:19Z",
      "updatedAt": "2023-08-17T11:18:19Z",
      "submissionId": "086dad28-0477-4b41-8c05-77dd98d41d6f",
      "category": "quality",
      "submissionMethod": "registry",
      "measureSet": null,
      "submitterId": "12c6258f-86db-492c-8637-4ff2668164b5",
      "submitterType": "organization",
      "programName": "mips",
      "practiceId": "",
      "practiceDetails": null,
      "cehrtId": "",
      "suppressed": false,
      "source": null,
      "performanceStart": "2023-01-01",
      "performanceEnd": "2023-12-31",
      "measurements": [
        {
          "id": "086dad28-4bcb-4649-a4fd-04ad8426df77",
          "measurementSetId": "086dad28-907a-4e88-af73-5c7ed2e6764e",
          "measureId": "047",
          "value": {
            "isEndToEndReported": false,
            "eligiblePopulationExclusion": 0,
            "eligiblePopulationException": 0,
            "performanceNotMet": 36,
            "eligiblePopulation": 156,
            "performanceMet": 120,
            "performanceRate": 76.92,
            "reportingRate": 100,
            "caseCount": 156,
            "performanceRateNumerator": 76.92,
            "performanceRateDenominator": 1
          }
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
      "detail": "18.6.0",
      "value": 9.473,
      "parts": [
        {
          "name": "quality",
          "title": "QUALITY component of total score",
          "detail": "Scoring based on weight of 50%.",
          "value": 9.473,
          "original": {
            "name": "quality",
            "value": 18.946,
            "detail": "Picked the highest scoring measurement set registry",
            "parts": [
              {
                "name": "quality",
                "value": 18.946,
                "detail": "registry",
                "parts": [
                  {
                    "detail": "Contributing 5.3676",
                    "metadata": {
                      "measurementSetId": "0a9b4dab-e700-4b76-871f-c897080b1c88",
                      "highPriorityBonus": 0,
                      "highPriorityBonusIgnored": true,
                      "decileScore": 5.3676,
                      "benchmarkType": "registry",
                      "performanceRate": 76.92,
                      "reportingRate": 100,
                      "measurementId": "0a9b4dab-4c0d-4fdd-b008-7a210d8603f9",
                      "measureClass": "Class 1",
                      "measureTitle": "Advance Care Plan",
                      "highPriorityBonusEligible": true,
                      "outcomeOrPatientExperienceBonus": 0,
                      "performanceDenominator": 156,
                      "performanceNumerator": 120,
                      "eligiblePopulation": 156,
                      "partialDecileScore": 0.3676,
                      "partialPoints": 4.86,
                      "decile": 5,
                      "deciles": [ ... ],
                      "processingStatus": "PICKED",
                      "totalMeasurementPoints": 5.3676,
                      "totalBonusPoints": 0,
                      "messages": {
                        "measurementClass": "Eligible population is greater than or equal to 20, reporting rate is greater than 70% and has benchmarks",
                        "highPriorityBonus": "Measure having highest decile score is not eligible for high priority bonus",
                        "measurementPicker": "Picked at 1",
                        "totalMeasurementPoints": "Measurement points for PICKED measure include decile score with all bonus points"
                      },
                      "noBenchmarks": false,
                      "eMeasureId": null,
                      "toppedOut": false,
                      "isGhost": false,
                      "programName": "mips",
                      "performanceStart": "2023-01-01",
                      "performanceEnd": "2023-12-31",
                      "isCpcPlus": false,
                      "isPcf": false,
                      "skippedDuplicate": false,
                      "unroundedScoreValue": 5.3676
                    },
                    "name": "047",
                    "value": 5.3676,
                    "instrumentations": [
                      "QUALITY-009",
                      "QUALITY-051",
                      "QUALITY-078",
                      "QUALITY-091",
                      "QUALITY-111",
                      "QUALITY-113",
                      "QUALITY-117",
                      "QUALITY-005"
                    ]
                  }
                ],
                "instrumentations": [
                  "QUALITY-031",
                  "QUALITY-032",
                  "QUALITY-060",
                  "QUALITY-025",
                  "QUALITY-026",
                  "QUALITY-061",
                  "QUALITY-071",
                  "QUALITY-101",
                  "QUALITY-116",
                  "QUALITY-142"
                ],
                "metadata": {
                  "messages": {
                    "denominator": "At least 1 high or outcome or patient experience measure available. So denominator is 60.",
                    "totalDecileScore": "Decile score points for measurements included in measurement set score, excluding bonus points",
                    "totalBonusPoints": "Sum of measurement bonus points included in the measurement set score",
                    "totalMeasurementPoints": "Sum of applicable measurement points.",
                    "smallPracticeBonus": "Bonus applied to quality submission with 15 or fewer clinicians",
                    "picked": "Measurement set selected for category score."
                  },
                  "measurementSetId": "0a9b4dab-e700-4b76-871f-c897080b1c88",
                  "maxContribution": 100,
                  "measuresPicked": ["047"],
                  "measuresSubmittedCount": 1,
                  "measuresSubmitted": ["047"],
                  "totalDecileScore": 5.3676,
                  "totalBonusPoints": 0,
                  "totalMeasurementPoints": 5.3676,
                  "denominator": 60,
                  "e2eBonusScore": 0,
                  "maxMeasurementsAllowed": 6,
                  "mergedWithCahps": false,
                  "processingStatus": "PICKED",
                  "smallPracticeBonusEligible": true,
                  "smallPracticeBonus": 6,
                  "dataCompletenessExemption": false,
                  "qualityAutocredit": 0,
                  "programName": "mips",
                  "unroundedScoreValue": 11.3676,
                  "measurementSetPicked": true,
                  "reweightedScore": 9.473
                }
              }
            ],
            "metadata": {
              "unroundedScoreValue": 18.945999999999998
            },
            "instrumentations": [
              "QUALITY-031",
              "QUALITY-032",
              "QUALITY-060",
              "QUALITY-025",
              "QUALITY-026",
              "QUALITY-061",
              "QUALITY-071",
              "QUALITY-101",
              "QUALITY-116",
              "QUALITY-142"
            ],
            "warnings": null
          },
          "metadata": {
            "maxContribution": 50,
            "unroundedScoreValue": 9.472999999999999
          }
        },
        {
          "name": "feedback-quality",
          "parts": [
            {
              "name": "047",
              "detail": "Focus on improving measure 047"
            }
          ]
        },
        {
          "name": "bonuses",
          "value": 0,
          "parts": []
        }
      ],
      "instrumentations": [],
      "metadata": {
        "submissionId": "0a9b42d8-d508-47c7-b550-f8b3f70380d1",
        "messages": {
          "pickedProgram": "Picked mips score to be submission score."
        },
        "pickedProgramName": "mips",
        "maxTotalScore": 100,
        "maxHighContributionIA": 40,
        "maxMediumContributionIA": 20,
        "maxContributionIA": 50,
        "maxContributionQuality": 50,
        "maxContributionCost": 0,
        "maxTotalContributionCost": 0,
        "maxContributionPI": 0,
        "piRollupBase": 0,
        "piRollupBonus": 0,
        "submittedQualityProgramNames": ["mips"],
        "submittedPIProgramNames": [],
        "submittedIAProgramNames": ["mips"],
        "iaCategoryScoreUnrounded": 0,
        "iaCategoryScore": 0,
        "iaWeightedScore": 0,
        "qualityImprovementBonus": 0,
        "previousYearQualityScore": 0,
        "previousYearNumerator": 0,
        "previousYearDenominator": 0,
        "qualityCategoryScoreUnrounded": 18.945999999999998,
        "qualityCategoryScore": 18.946,
        "qualityWeightedScore": 9.473,
        "isSubmissionFabricated": false,
        "hasIAMeasures": false,
        "hasQualityMeasures": true,
        "hasACIMeasures": false,
        "hasPIMeasures": false,
        "hasCostMeasures": false,
        "hasACRMeasure": false,
        "hasCAHPSMeasure": false,
        "hasScorableIAMeasures": false,
        "hasScorableACIMeasures": false,
        "hasScorablePIMeasures": false,
        "hasScorableCostMeasures": false,
        "hasScorableQualityMeasures": true,
        "hasMIPSPIMeasures": false,
        "hasAPPPIMeasures": false,
        "hasScorableMIPSPIMeasures": false,
        "hasScorableAPPPIMeasures": false,
        "hasMIPSIAMeasures": false,
        "hasAPPIAMeasures": false,
        "hasScorableMIPSIAMeasures": false,
        "hasScorableAPPIAMeasures": false,
        "numberOfCategoriesHavingExternalMeasures": 1,
        "hasSkippedWIMSet": false,
        "hasMergedRegistryMSet": false,
        "givenIAStudyCredit": false,
        "hasIAWeightStatus": "SPECIAL",
        "givenAPMParticipationCredit": false,
        "givenIACreditPCMH": false,
        "hasClaimsOnlyMeasures": false,
        "hasMinimumACIPerformancePeriod": false,
        "hasMinimumPIPerformancePeriod": false,
        "hasIncompleteAPMWISubmission": false,
        "qualityReweighted": false,
        "piReweighted": false,
        "iaReweighted": false,
        "costReweighted": true,
        "unroundedScoreValue": 9.472999999999999,
        "runtimeInMillis": 4
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
  measurementSetsId2: {
    verb: 'PATCH',
    url: '/measurement-sets/:id',
    rows: [
      {
        row: ['Submission ID', '086dad28-0477-4b41-8c05-77dd98d41d6f'],
      },
      {
        row: ['Measurement Set ID', '086dad28-907a-4e88-af73-5c7ed2e6764e'],
      },
      {
        row: ['Category', 'Quality'],
      },
      {
        row: ['Submission Method', 'Registry'],
      },
      {
        row: ['Performance Start', '2023-01-01'],
      },
      {
        row: ['Performance End', '2023-12-31'],
      },
      {
        row: ['Measurements'],
        classes: ['nested-once'],
      },
      {
        row: ['Measure <code>001</code>', '<code>true</code>'],
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
        row: ['Entity', 'Group'],
      },
      {
        row: ['Taxpayer Identification Number', '000000002'],
      },
      {
        row: ['Performance Year', '2023'],
      },
    ],
  },
};
