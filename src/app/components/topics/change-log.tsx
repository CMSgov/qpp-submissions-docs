import React from 'react';

import envConfig from '../../../envConfig';

const submissionChangesTable = [
  ['08/31/2023', `Fields added to the Submission Response`, `
  3 fields have been added to the Submission Response:  caseCount, performanceRateNumerator and performanceRateDenominator.
  `],
  ['10/05/2022', `Updates to Strata validation for QCDR measures`, `
  Validation has been added for QCDR measures to ensure that the strata name is valid and that the appropriate number of strata are included in the submission.  For example, if there are 3 strata defined for the measure, then 3 valid strata need to be submitted.
  `],
  ['09/14/22', `Updates to Special Scoring Scenarios`, `
  <ul>
  <li>The Special Scoring Scenarios have been simplified and several retired</li>
  <li>See the <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-special-scoring-scenarios' target='_blank' rel='noopener noreferrer'>Special Scoring Scenarios</a>.</li>
  <ul>
  `],
  ['08/31/22', `APP Submissions tutorial updated`, `
  <ul>
  <li>The How to Test Submissions and Scoring Scenarios table has been updated to reflect current scenarios.</li>
  <li>See the <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-app-submissions' target='_blank' rel='noopener noreferrer'>Developer Preview Documentation</a> for details.</li>
  <ul>
  `],
  ['08/31/22', `Updates to Special Scoring Scenarios`, `
  <ul>
    <li>
      Test Scenario 2 (TIN 000000002) has been updated to reflect the PY2022 policy around Small Practice ACI Reweighting
    </li>
    <li>
      Test Scenario 5 (TIN 000000005) has been updated to reflect the PY2022 policy for Groups impacted by Extreme and Uncontrollable Circumstances
    </li>
    <li>
      Test Scenario 9 (TIN 000000009) has been updated to reflect the PY2022 policy around scoring for Small Practices
    </li>
    <li>
      Test Scenario 10 (TIN 000000010) has been added to reflect the PY2022 policy for a MIPS Group with MIPS APM participants located in a Rural/HPSA area
    </li>
    <li>
      See the <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-special-scoring-scenarios' target='_blank' rel='noopener noreferrer'>Special Scoring Scenarios</a>.
    </li>
    <li>
      Additional information for scoring changes for Small Practices for Performance Year 2022/2024 MIPS Payment year can be found <a href='https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-414/subpart-O#p-414.1380(c)(2)(ii)(G)' target='_blank' rel='noopener noreferrer'>here</a>.
    </li>
  </ul>`],
  ['08/31/22', `Submissions API Infrastructure Update in Developer Preview`, `
  <ul>
    <li>
      Developer Preview has been updated to utilize a modern API framework.
    </li>
    <li>
      Production will be updated prior to Submissions Opening in Jan 2023.
    </li>
    <li>
      See <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/error-codes' target='_blank' rel='noopener noreferrer'>Error Codes</a> for additional details.
    </li>
  </ul>`],
  ['08/31/22', `For APM participants who participate in the Primary Care First (PCF) APM model, there is no longer a registry requirement to report to the PCF program.`,`Quality Measure ID 047 is no longer required to be submitted to PCF through the registry <code>measurementSet</code> for PY 2022.`],
  ['08/31/22', `For APMs who participated in the CPC+ APM model, this model is no longer an active program starting in PY2022`, `
  <ul>
    <li>
      <code>cpcPlus</code> has been removed from the Progam list.
    </li>
    <li>
      Property Name <code>practiceId</code> is no longer a valid property.
    </li>
    <li>
      For details, see <a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurement-sets' target='_blank' rel='noopener noreferrer'>Measurement Sets</a>.
    </li>
  </ul>`],
  ['12/29/21', `<code>performanceRate</code> value validation - negative values are not allowed`, `
    <ul>
      <li>
        Added validation when <code>metricType</code> = <code>registrySinglePerformanceRate</code> OR <code>registryMultiPerformanceRate</code>, then <code>performanceRate</code> is stored and represented as a percentage with a value between 0 and 100. A negative <code>performanceRate</code> value is not allowed.
      </li>
      <li>
        For details, see <a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#single-performance-rate-measurements' target='_blank' rel='noopener noreferrer'>Single-Performance Rate Measurements</a> and <a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#multi-performance-rate-measurements' target='_blank' rel='noopener noreferrer'>Multi-Performance Rate Measurements</a>.
      </li>
    </ul>`],
  ['11/22/21', 'Update to retrieve score by program name', `
    <ul>
      <li>
        Updated the <code>GET /submissions/{id}/score</code> endpoint with the ability to filter results by program name using a query parameter.
      </li>
      <li>
        For example, by querying the endpoint with <code>?program=mips</code>, the API returns all of the user's scores related to the MIPS program.
      </li>
      <li>
        If no program is provided, the API returns the user's scores for all programs, which maintains legacy behavior.
      </li>
      <li>
        See the <a href='https://preview.qpp.cms.gov/api/submissions/public/docs/#/Submissions/getSubmissionScore' target='_blank' rel='noopener noreferrer'>Submissions API Swagger Documentation</a> for more details.
      </li>
    </ul>`],
  ['8/15/21', 'Updates for Y5 Traditional MIPS Submissions and Scoring for PY2021 are now supported.', `
    <ul>
      <li>
        Added validation that only QCDR vendors who are approved by the QCDR measure Steward can submit that QCDR measure.
      </li>
      <li>
        For PI category measurementSets, added validation so that the "substitute": measure(s) cannot be submitted with the original measure. This is because the substitute measure(s) replaces the original measure and both should not be submitted.
      </li>
      <li>
        For PI category measurementSets, added validations so that PI can only be submitted where entityType = group or individual. (PI cannot be submitted for APM entities).
      </li>
      <li>
        Reminder: Groups and Individuals who are LVT Opt-In eligible MUST make an Opt-In election <i>before</i> data can be submitted for them.
      </li>
    </ul>`],
  ['8/15/21', 'For APM Participants, APP Submissions and Scoring for PY2021 are now supported.', `
    <ul>
      <li>
        Added the ability to submit measurementSets to the APP program (<code>programName = app1</code>).
      </li>
      <li>
        MeasurementSets can be submitted to the APP program for entityType(s) = apm, group, or individual. (Virtual Groups cannot submit to the APP program as they cannot be APM participants).
      </li>
      <li>
        Only eligible APM participants are allowed to submit to the APP program. Includes: APM entities, Groups, and Individuals who are eligible APM participants.
      </li>
      <li>
        Group or Individual APM participants MUST be above the LVT threshold OR they must be LVT Opt-In eligible and have elected to Opt-In to submit to the APP program.
      </li>
      <li>
        Only the following 3 quality measures can be submitted to the APP program through the registry submissionMethod: 001, 134, 236.
      </li>
      <li>
        See the <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-app-submissions' target='_blank' rel='noopener noreferrer'>Tutorial: APP Submissions</a> for an example of how to submit to the APP.
      </li>
    </ul>`],
  ['8/15/21', 'For APM participants who participate in the Primary Care First (PCF) APM model, PCF model requirement submissions for PY2021 are now supported.', `
    <ul>
      <li>
        Added the ability to submit to the Primary Care First (PCF) program for entityType = apm. (The PCF program does not accept submissions for Groups, Individuals, or Virtual Groups.)
      </li>
      <li>
        For measurementSets object, added new <code>programName = pcf</code>. (Note: for PCF submissions the programName can be upper or lowercase.)
      </li>
      <li>
        For measurementSets object, added new optional attribute for practiceDetails which is a TIN and/or NPIs that the data is being submitted for. Optional: if provided, must follow the correct format for TINs and NPIs.
      </li>
      <li>
        Quality measure ID 47 is required to be submitted to PCF through the registry measurementSet for PY 2021.
      </li>
      <li>
        See the <a href='${envConfig.cmsGithubIo}/qpp-developer-preview-docs/tutorial-pcf-submissions' target='_blank' rel='noopener noreferrer'>Tutorial: PCF Submissions</a> for an example of how to submit to PCF.
      </li>
    </ul>`],
    ['8/15/20', 'Add "eligiblePopulationExclusion" validation for CQM measures', `For "category": "quality" AND "submissionMethod": "registry" AND "isRegistryMeasure": "false", add validation so that "eligiblePopulationExclusion" MUST be 0 or NULL.  Note: Per the measure Specification, Registries should already have reduced the denominator for excluded populations. See details here:
      <br><a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#single-performance-rate-measurements' target='_blank' rel='noopener noreferrer'>Single Performance Rate Measurements</a>`],
    ['8/15/20', 'Add "exclusion" validation for PI measures', `For "category": "pi", add validation so that the "exclusion": measure cannot be submitted in the same measurementSet as the original measure.  This is because the exclusion is attesting to the opposite condition as the original measure.  See details:
    <br><a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#boolean-measurements' target='_blank' rel='noopener noreferrer'>Boolean Measurements</a>
    <br><a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#proportion-measurements' target='_blank' rel='noopener noreferrer'>Proportion Measurements</a>`],
    ['8/15/20', 'Support APM Entity ID submissions through "submissionMethod": "registry".', `
    <ul>
      <li>
        All Submission API endpoints will now support "entityType": "apm" and "entityId": APM entity Id.  This is in addition to the entityTypes already supported.
      </li>
      <li>
        LVT Opt-In elections for APMs is managed by AMS and as such the LVT Opt-In election cannot be made for the APM through QPP and only through AMS.  The Final Score process will take into account LVT Opt-In elections for the APM entity.  The Submissions API endpoints cannot enforce that an LVT Opt-In election has been made in AMS.  Thus there are no LVT Opt-In submission scenarios to test for apm entities.
      </li>
      <li>
        An APM entityType will be able to submit the following types of measurementSets:
        <ul>
          <li>
            "category": "quality" AND "submissionMethod": "registry" OR  "submissionMethod": "electronicHealthRecord" are allowed.
          </li>
          <li>
            "category": "ia" are allowed.  Note: for "category": "ia" scoring rules for APMs are such that IA submissions are not necessary, as APMs will receive a 100% auto-credit for that category.
          </li>
          <li>
            "category": "pi" is not allowed.  PI scores for the APM entity will be rolled up from the Group and Individual participants in the APM.  If you try to submit PI you will receive an error.
          </li>
        </ul>
      </li>
    </ul>`],
];
const measuresChangeTable = [
  ['8/15/21', `<code>allowedPrograms</code> is added to all quality Measures.`, `For <code>category: "quality"</code>, <code>allowedPrograms</code> is added to list the programs to which the measure <i>can</i> be submitted.`],
  ['8/15/21', `<code>requiredForPrograms</code> is added to all quality Measures.`, `For <code>category: "quality"</code>, <code>requiredForPrograms</code> is added to list the programs to which the measure <i>must</i> be submitted.`],
  ['8/15/21', `<code>allowedVendors</code> is added to all QCDR Measures.`, `For QCDR Measures (<code>isRegistryMeasure = true</code>), <code>allowedVendors</code> is added to list the VendorIDs that are allowed to submit that measure.`],
  ['12/01/20', `<code>icdImpacted</code> added`, `List of submissionMethods where ICD 10 codes for the measure changed during the submission year. Used to truncate submissions data to only the first nine months of the performance year when the ICD 10 codes were unchanged. Typically impacts claims submissionMethod. Does not impact registry submissionMethod. Note: isIcdImpacted = "true" where at least one submission method is listed in "icdImpacted". Note: Added to the PY2020 and PY2021 Measures Repository schema.`],
  ['12/01/20', `<code>benchmarks</code> array added, in the format <code>benchmarks:{ &ltsubmissionMethod&gt: "removed" }`, `List of submissionMethods where the measure is known to have changed from the previous performance year before the data collection period opens. Used to trigger removal of historical benchmarks as the meaning of the measure changed significantly from the previous Performance Year. Performance year benchmarks may still be generated once all submissions data is received. Note: Added only to the PY2021 Measures Repository schema.`],
  ['8/15/20', `<code>isToppedOut</code> is removed.`, `For all Measures, <code>isToppedOut</code> attribute is removed and moved to the <code>/benchmarks</code> file`],
  ['8/15/20', `<code>weight</code> attribute is removed for PI measures.`, 'Where <code>category: "pi"</code>, <code>weight</code> attribute is removed'],
];

const buildTableHeader = () =>
  <thead>
    <tr>
      {['Date', 'Change', 'Description'].map((h, i) => <th key={i}>{h}</th>)}
    </tr>
  </thead>;

const buildTableBody = (data: string[][]) =>
  <tbody>
    {data.map(([date, change, description], i) =>
      <tr key={i}>
        <td className='qpp-table-text-align' style={{textAlign: 'center'}}>{date}</td>
        {envConfig.htmlRegex.test(change)
          ? <td className='qpp-table-text-align' dangerouslySetInnerHTML={{ __html: change }} />
          : <td className='qpp-table-text-align'>{change}</td>
        }
        {envConfig.htmlRegex.test(description)
          ? <td className='qpp-table-text-align'  dangerouslySetInnerHTML={{ __html: description }} />
          : <td className='qpp-table-text-align' >{description}</td>
        }
      </tr>,
    )}
  </tbody>;

const ChangeLog = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/31/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='change-log'>Change Log</h2>
      <p className='ds-text'>
        The Change log is updated with each significant change to the API with the details that you need to be aware of.
      </p>

      <h3 className='ds-h3'>Submission API</h3>
      <table className='ds-c-table ds-u-font-size--small'>
        {buildTableHeader()}
        {buildTableBody(submissionChangesTable)}
      </table>

      <h3 className='ds-h3'>Measures Repository</h3>
      <table className='ds-c-table ds-u-font-size--small'>
        {buildTableHeader()}
        {buildTableBody(measuresChangeTable)}
      </table>
    </>
  );
};

export default ChangeLog;
