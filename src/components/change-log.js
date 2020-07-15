import React from 'react';

class ChangeLog extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Change Log</h2>
        <p className='ds-text'>
          The Change log is updated with each significant change to the API with the details that you need to be aware of.
        </p>

        <h3 className='ds-h3'>Submission API</h3>
        <p className='ds-text'>
          The Change log is updated with each significant change to the API with the details that you need to be aware of.
        </p>

        <ul>
          <li>
            <strong>8/15/20: Add "eligiblePopulationExclusion" validation for CQM measures</strong>
            <ul>
              <li>
                For "category": "quality" AND "submissionMethod": "registry" AND "isRegistryMeasure": "false", add validation so that "eligiblePopulationExclusion" MUST be 0 or NULL.  Note: Per the Measure Specification, Registries should already have reduced the denominator for excluded populations.  See details here: <a href='https://cmsgov.github.io/qpp-submissions-docs/measurements#single-performance-rate-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#single-performance-rate-measurements</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>8/15/20: Add "exclusion" validation for PI measures</strong>
            <ul>
              <li>
                For "category": "pi", add validation so that the "exclusion": measure cannot be submitted in the same measurementSet as the original measure.  This is because the exclusion is attesting to the opposite condition as the original measure.  See details:
                <a className='display--inline-block' href='https://cmsgov.github.io/qpp-submissions-docs/measurements#boolean-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#boolean-measurements</a>
                <a className='display--inline-block' href='https://cmsgov.github.io/qpp-submissions-docs/measurements#proportion-measurements' target='_blank' rel='noopener noreferrer'>cmsgov.github.io/qpp-submissions-docs/measurements#proportion-measurements</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>8/15/20: Support APM Entity ID submissions through "submissionMethod": "registry".</strong>
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
            </ul>
          </li>
        </ul>

        <h3 className='ds-h3'>Measures Repository</h3>
        <ul>
          <li>
            <strong>8/15/20: "isToppedOut" is removed</strong>
            <ul>
              <li>
                For all Measures, "isToppedOut": attribute is removed and moved to the /benchmarks file
              </li>
            </ul>
          </li>
          <li>
            <strong>8/15/20: "weight" attribute is removed for PI measures</strong>
            <ul>
              <li>
                Where "category": "pi" "weight": attribute is removed
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };
}

export default ChangeLog;
