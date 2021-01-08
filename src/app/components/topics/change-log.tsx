import React from 'react';

import envConfig from '../../../envConfig';

const submissionChangesTable = [
  ['8/2020', 'Add "eligiblePopulationExclusion" validation for CQM measures', `For "category": "quality" AND "submissionMethod": "registry" AND "isRegistryMeasure": "false", add validation so that "eligiblePopulationExclusion" MUST be 0 or NULL.  Note: Per the Measure Specification, Registries should already have reduced the denominator for excluded populations.  See details here: <a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#single-performance-rate-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#single-performance-rate-measurements</a>`],
  ['8/2020', 'Add "exclusion" validation for PI measures', `For "category": "pi", add validation so that the "exclusion": measure cannot be submitted in the same measurementSet as the original measure.  This is because the exclusion is attesting to the opposite condition as the original measure.  See details:
  <br><a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#boolean-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#boolean-measurements</a>
  <br><br><a href='${envConfig.cmsGithubIo}/qpp-submissions-docs/measurements#proportion-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#proportion-measurements</a>`],
  ['8/2020', 'Support APM Entity ID submissions through "submissionMethod": "registry".', `
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
  ['12/2020', '"icdImpacted" added', 'List of submissionMethods where ICD 10 codes for the measure changed during the submission year.  Used to truncate submissions data to only the first nine months of the performance year when the ICD 10 codes were unchanged. Typically impacts claims submissionMethod.  Does not impact registry submissionMethod.  Note: isIcdImpacted = "true" where at least one submission method is listed in "icdImpacted".  Note: Added to the PY2020 and PY2021 Measures Repository schema.'],
  ['12/2020', '"benchmarks" array added, in the following format "benchmarks": { <submissionMethod>: "removed" }', 'List of submissionMethods where the measure is known to have changed from the previous performance year before the data collection period opens. Used to trigger removal of historical benchmarks as the meaning of the measure changed significantly from the previous Performance Year.  Performance year benchmarks may still be generated once all submissions data is received.  Note: Added only to the PY2021 Measures Repository schema.'],
  ['8/2020', '"isToppedOut" is removed', `For all Measures, "isToppedOut": attribute is removed and moved to the <code>/benchmarks</code> file`],
  ['8/2020', '"weight" attribute is removed for PI measures', 'Where "category": "pi" "weight": attribute is removed'],
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
        <td>{date}</td>
        <td>{change}</td>
        {envConfig.htmlRegex.test(description)
          ? <td dangerouslySetInnerHTML={{ __html: description }} />
          : <td>{description}</td>
        }
      </tr>,
    )}
  </tbody>;

const ChangeLog = () => {
  return (
    <>
      <h2 className='ds-h2' id='change-log'>ChangeLog</h2>
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
