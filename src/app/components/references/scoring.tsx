import React from 'react';

import { ExternalLink, CodeTab, LinkToId } from '../../../shared';
import { scoringData } from './data';

interface ITextAndId {
  [k: string]: {
    id: string;
    sub: {
      [k: string]: string;
    }
  };
}

const textAndId: ITextAndId = {
  'Improvement Activities': {
    id: 'ia',
    sub: {
      'Improvement Activity Submissions': 'ia-sub',
      'Improvement Activity Scoring Response': 'ia-response',
    },
  },
  'Promoting Interoperability': {
    id: 'pi',
    sub: {
      'Promoting Interoperability Submissions': 'pi-sub',
      'Promoting Interoperability Scoring Response': 'pi-response',
    },
  },
  'Quality': {
    id: 'quality',
    sub: {
      'Quality Submissions': 'quality-sub',
      'Quality Scoring Response': 'quality-response',
    },
  },
};

const Scoring = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Scoring</h2>

      <ul>
        {Object.entries(textAndId).map(([title, { id, sub }], i) =>
          <li key={i}>
            <LinkToId to={`#${id}`} text={title} offset='120' />
            {sub &&
              <ul>
                {Object.entries(sub).map(([subTitle, subId]) =>
                  <li key={`${subId}-${i}`}>
                    <LinkToId to={`#${subId}`} text={subTitle} offset='120' />
                  </li>,
                )}
              </ul>
            }
          </li>,
        )}
      </ul>

      <h2 className='ds-h2'>Overview</h2>
      <p className='ds-text--lead'>
        The scoring engine is responsible for interpreting submissions and outputting a score. Each category score is utilized to create the Overall Score for QPP. Related to Registry and QCDR submissions, only an Overall Score will be given. To view a Final Score, permission from the practice must be given.
      </p>
      <p className='ds-text--lead'>
        A performance score is generated in two different ways. First, submission by GET request with the identifier of a stored submission to the Submissions API's submissions endpoint located at <code>/submissions/:id/score</code> will produce a score. Second, submission by POST request with a full submission in QPP JSON format to the Submissions API's score preview endpoint located at <code>/submissions/score-preview</code> will also produce a score.
      </p>
      <p className='ds-text--lead'>
        In the sections below, each category within QPP that can be submitted will be explained and examples provided. Measures and Activities available for submission can be found here: <ExternalLink href='https://github.com/CMSgov/qpp-measures-data/blob/master/measures/2018/measures-data.json' text='qpp-measures-data' />.
      </p>
      <p className='ds-text--lead'>
        Last, the Score Object is passed back to the QPP Submissions API, which builds the application response by inserting the Score Object into the response body and returns this response to the requester. This response body contains JSON describing in detail the record of the current aggregate estimate of the submission score.
      </p>

      <h3 className='ds-h3'>Group Vs. Individual Submission</h3>
      <p className='ds-text--lead'>
        There are two available options for submission, either Group, or Individual. These create two different records and are not combined to create a single score. If you are reporting as a Group, it is important to report every category you are reporting as a Group. If you are reporting as an individual, the same premise applies. The <code>"entityType"</code> field is the indicator within the submission to determine what is being reported. If reporting as a group, only the <code>"taxpayerIdentificationNumber"</code> is applicable. If you are reporting as an individual, you must report both the <code>"taxpayerIdentificationNumber"</code> and the corresponding <code>"nationalProviderIdentifier"</code>.
      </p>

      <h3 className='ds-h3' id={textAndId['Improvement Activities'].id}>Improvement Activities (IA)</h3>
      <p className='ds-text--lead'>
        The only available option for reporting Improvement Activities is boolean, and only Activities completed need to be reported.
      </p>
      <ul>
        <li>
          <LinkToId to='measurements#boolean-measurements' text='Boolean' offset='120' />
        </li>
      </ul>

      <h3 className='ds-h3' id={textAndId['Improvement Activities'].sub['Improvement Activity Submissions']}>Example IA Submission</h3>
      <p className='ds-text--lead'>
        The example submission below contains 4 activities. The reported activities contain both High and Medium weighted activities.
      </p>
      <CodeTab data={scoringData.submissionJsonExampleStringIa} />

      <h3 className='ds-h3' id={textAndId['Improvement Activities'].sub['Improvement Activity Scoring Response']}>Example IA Submission Output Object</h3>
      <p className='ds-text--lead'>
        The output below shows the score at multiple levels. Although the IA category score has exceed the maximum points, you can never receive a score higher than the max. Activities that are High weighted are receiving a <code>"value": 20</code> at the activity level in the response. Medium weighted activities are receiving <code>"value": 10</code>. The category has a <code>"maxContribution"</code> of 40 and the a <code>"maxContribution"</code> of 15 toward Overall Score.
      </p>
      <CodeTab data={scoringData.scoringJsonExampleStringIa} />

      <h2 className='ds-h3' id={textAndId['Promoting Interoperability'].id}>Promoting Interoperability (PI)</h2>
      <p className='ds-text--lead'>
        The Promoting Interoperability Category has been updated since last year and now requires all measures associated with the category to either be reported or their corresponding exclusion to be claimed. Additionally, to receive credit for the category, all the criteria below must be fulfilled:
      </p>
      <ul>
        <li>Utilization of 2015 CEHRT and the reporting of the corresponding CMS CEHRT ID in the submission</li>
        <li>Minimum 90 day performance period</li>
        <li>Completion of Required Attestation Statements</li>
        <li>Completion of All Required Measures</li>
        <li>Bonus Measures</li>
      </ul>

      <h3 className='ds-h3' id={textAndId['Promoting Interoperability'].sub['Promoting Interoperability Submissions']}>Example PI Submission</h3>
      <p className='ds-text--lead'>
        The measure types available for submission are outlined below. Each measure in the repo will dictate which type is to be utilized.
      </p>
      <ul>
        <li>
          <LinkToId to='measurements#proportion-measurements' text='Proportion Measures' offset='120' />
        </li>
        <li>
          <LinkToId to='measurements#boolean-measurements' text='Boolean' offset='120' />
        </li>
      </ul>
      <CodeTab data={scoringData.submissionJsonExampleStringAci} />

      <h3 className='ds-h3' id={textAndId['Promoting Interoperability'].sub['Promoting Interoperability Scoring Response']}>Example PI Submission Output Object</h3>
      <p className='ds-text--lead'>
        The output below shows the score at multiple levels. Although the PI category score has exceed the maximum points, you can never receive a score higher than the max. If no score is return, check the <code>"attestationStatementCheck"</code> and <code>"baseMeasureCheck</code> within the <code>"metadata</code>. If either of these are listed as incomplete, the submission must be fixed to receive a score. The category has a <code>"maxContribution"</code> of 100 and the a <code>"maxContribution"</code> of 25 toward Overall Score.
      </p>
      <CodeTab data={scoringData.scoringJsonExampleStringAci} />

      <h2 className='ds=h2' id={textAndId.Quality.id}>Quality</h2>
      <p className='ds-text--lead'>
        The Quality category requires 6 measures to receive full credit, one of which must be either an Outcome measure or High Priority. If no Outcome or High Priority measure is submitted, you will only be scored on the top 5 measures and receive a score of 0 for the sixth measure.
      </p>

      <h3 className='ds-h3' id={textAndId.Quality.sub['Quality Submissions']}>Example Quality Submission</h3>
      <p className='ds-text--lead'>
        Submission structure in the Quality category are contingent on the measure being submitted. If there are questions around the data to be submitted in the fields, please refer to the measure specification. The available types related to the measures are outlined below:
      </p>
      <ul>
        <li>
          <LinkToId to='measurements#non-proportion-measurements' text='Non-Proportion Measures' offset='120' />
        </li>
        <li>
          <LinkToId to='measurements#single-performance-rate-measurements' text='Single Performance Rates' offset='120' />
        </li>
        <li>
          <LinkToId to='measurements#multi-performance-rate-measurements' text='Multi-Performance Rates' offset='120' />
        </li>
      </ul>
      <p className='ds-text--lead'>
        In the sample below, measure 046 is a multi-strata, 110 is a single performance measure, ACRAD15 is a non-proportion measure.
      </p>
      <CodeTab data={scoringData.submissionJsonExampleStringQuality} />

      <h3 className='ds-h3' id={textAndId.Quality.sub['Quality Scoring Response']}>Example Quality Submission Output Object</h3>
      <p className='ds-text--lead'>
        Based on the submission details, a data completeness and performance rate is created. The measures are broken into three categories to determine score output.
      </p>
      <ul>
        <li>
          Class 1 - The measure has met both the data completeness threshold and minimum eligible population criteria
        </li>
        <ol type='a'>
          <li>
            If the measure has a benchmark, the measure will be compared to a benchmark and a score will be awarded based on performance compared to the benchmark
          </li>
          <li>
            If the measure does not have a benchmark, a score of 3 will be awarded
          </li>
        </ol>
        <li>
          Class 2 - The measure does not meet the 60% data completeness threshold or has below 20 eligible patients in the <code>eligiblePopulation</code> field, the measure will not be compared to a benchmark.
        </li>
        <ol type='a'>
          <li>
            If the clinician is a small practice, they will be awarded 3 points, irregardless of whether they have not either data completeness or minimum eligible population criteria
          </li>
          <li>
            If the clinician is not a small practice and has met the data completeness rate but did not meet the minimum eligible population criteria score of 3 will be awarded
          </li>
        </ol>
        <li>
          Class 3 - If the clinician is not a small practice and has met the necessary eligible population criteria but has met the data completeness rate a score of 1 will be awarded
        </li>
      </ul>
      <CodeTab data={scoringData.scoringJsonExampleStringQuality} />

      <p>
        <em>Disclaimer:</em> Scoring is subject to change, based on periodic policy updates, eligibility reviews, and technical integration developments.
      </p>
    </>
  );
};

export default Scoring;
