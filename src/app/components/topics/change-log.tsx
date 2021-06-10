import React from 'react';

import envConfig from '../../../envConfig';

const submissionChangesTable = [
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
        APM participants MUST be above the LVT threshold OR they must be LVT Opt-In eligible and have elected to Opt-In to submit to the APP program.
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
        For measurementSets object, added new optional attribute for practiceDetails which is the list of TINs or TIN:NPIs that the data is being submitted for. Optional: if provided, must follow the correct format for TINs and NPIs.
      </li>
      <li>
        Quality measure ID 47 is required to be submitted to PCF through the registry measurementSet for PY 2021. Note: other quality measures are optional.
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
      <p className='qpp-docs-page-updated'>Last Updated: 06/08/2021</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='change-log'>ChangeLog</h2>
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
