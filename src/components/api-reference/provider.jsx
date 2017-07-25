import React, {PureComponent} from 'react';

const providerStubRules = [
  {
    position: "4th position",
    ruleText: "corresponds to the value for the provider's",
    field: "clinician type",
    ruleDetails: [
      "000-1x-xxxx: Certified Registered Nurse Practitioner",
      "000-2x-xxxx: Physicians Assistant",
      "000-3x-xxxx: Certified Registered Nurse Anesthetists",
      "000-4x-xxxx: Clinical Nurse Specialist",
      "Otherwise, the clinician type is left undefined."
    ]
  },
  {
    position: "5th position",
    ruleText: "corresponds to a value identifying provider participation in",
    field: "Alternative Payment Models (APMs)",
    ruleDetails: [
      "000-x1-xxxx: The provider is in a non-ACO APM which results in a re-weighting of quality to 0%",
      "000-x2-xxxx: The provider is in an ACO APM that does score quality (SSP all tracks, Next Gen ACO), e.g. \"sharedSavingsProgramTrack3\"",
      "Otherwise, provider participation in APMs is left undefined."
    ]
  },
  {
    position: "6th position",
    ruleText: "corresponds to the value for the provider's",
    field: "ACI Reweighting Status",
    ruleDetails: [
      "000-xx-1xxx: pending",
      "000-xx-2xxx: approved",
      "000-xx-3xxx: denied",
      "Otherwise, provider ACI Reweighting Status is left undefined."
    ]
  },
  {
    position: "7th, 8th and 9th positions",
    ruleText: "corresponds to the attribution of",
    field: "various provider characteristics",
    ruleDetails: [
      "A \"2\" in positions 7, 8 or 9 indicates the provider is part of a small practice",
      "3: Is part of a rural practice",
      "4: Is in a shortage area",
      "5: Is excluded due to low volume",
      "6: Is non-patient facing",
      "7: Is part of an Accredited Patient-Centered Medical Home",
      "8: Is an Improvement Activity Study Participant",
      "9: Is a hospital reporter",
      "For example: The TIN 000-xx-x369 represents a provider who is part of a rural practice, is non-patient facing and is a hospital reporter.",
      "For example: 000-xx-x000 represents a provider who features none of these characteristics."
    ]
  }
];

const profileStubItems = providerStubRules.map((rule, index) =>
  <li key={index}>The <b>{rule.position}</b> {rule.ruleText} <em>{rule.field}</em>.
    <ul>
      {rule.ruleDetails.map((detail, index) => <li key={index}>{detail}</li>)}
    </ul>
  </li>
);

export default class Provider extends PureComponent {
  render() {
    return (
      <div id="provider">
        <h1 className="ds-h1">Provider Profile Stub</h1>
        <p className="ds-text--lead">A submission to the Submissions API requires a Taxpayer Identification Number (TIN) and may include a National Provider Identifier (NPI). These identifiers are used to accurately attribute the submission to a provider. A provider's profile includes information which is used to trigger special scoring scenarios.</p>
        <p className="ds-text--lead"><b>Note:</b> For the Beta 1 Release, no special scoring scenarios will be applied in the production environment. Every submission will be attributed with the default provider profile which incurs no special scoring.</p>
        <p className="ds-text--lead">In order to support testing of special scoring scenarios, the Submissions API features a provider profile stub in the <a href="http://qpp-submissions-sandbox.navapbc.com/">sandbox</a> environment. In this environment, the Submissions API enforces the use of fake TINs, requiring TINs to start with 3 "000"s.</p>
        <p className="ds-text--lead">The trailing 6 positions of fake TINs are used to populate a provider profile stub. The stub logic is detailed below and enables a tester to provide variations of fake TINs which result in different provider profiles.</p>
        <p className="ds-text--lead">The provider profile stub enforces the following rules:</p>
        <ul className="ds-text--lead">{profileStubItems}</ul>
      </div>
    );
  }
}
