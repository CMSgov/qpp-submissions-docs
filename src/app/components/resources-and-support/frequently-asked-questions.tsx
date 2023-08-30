import React from 'react';

import envConfig from '../../../envConfig';
import { ExternalLink } from '../../../shared';

const tableData = {
  'If I am an EHR, how can I submit MIPS Quality data for my clients?': `
    <ul>
      <li>
        Submissions UI: EHRs can submit via the Submissions UI by logging into the QPP site <a href='https://qpp.cms.gov' target='_blank' rel='noopener noreferrer'>qpp.cms.gov</a>. They will have to be connected as a Staff user for each of the Individuals and Groups they need to submit quality data for. Submissions for each individual or group could be uploaded as an excel file for efficiency.
      </li>
      <li>
        Burden Reduction: EHRs may apply for Burden Reduction which allows them to obtain a registry token to use to submit via the Submissions API.
      </li>
    </ul>
  `,
  'What is the performance threshold for the Submissions API?': '25 rps avg threshold, 40 rps burst threshold.',
};

const tableData1 = {
  'How to report Measure 238 / CMS156': `
    <ul>
      <li>
        MIPS CQM: This should follow the CQM Specification and 2 strata are expected to be reported.
      </li>
      <li>
        eCQM: This should follow the eCQM Specification and 3 strata are expected to be reported. If mapping to QPP JSON, Numerator Exclusions should be mapped to the performanceNotMet field.
      </li>
    </ul>
  `,
  'How do I report SubGroups?': 'We will be updating the Developer Preview environment again at the end of September to add subgroup identifier capability.  A Tutorial will be added at that time.',
  'PI Electronic Prescribing Objective Exclusion Reweighting': `The exclusions for <code>PI_EP_2</code> (<code>PI_EP_2_EX_1</code>, <code>PI_EP_2_EX_2</code>, <code>PI_EP_2_EX_3</code>) are not reweighing to <code>PI_EP_1</code>. It is incorrectly reweighing to next objective <code>healthInformationExchange</code>.  We are currently working on a fix.`,
  'Score-preview endpoint returns a score for a MVP submission for a non-MVP registered entity.': 'Currently working on a fix to ensure MVP registration is validated when testing using the score-preview endpoint.',
};

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/31/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Frequently Asked Questions</h2>

      <h3 className='ds-h3'>General and Developer Preview</h3>
      <p>
        See <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs/frequently-asked-questions`} text='Developer Preview Frequently Asked Questions' />
      </p>

      <h3 className='ds-h3'>Submissions API</h3>
      <table className='ds-c-table ds-u-font-size--small faq-table'>
        <thead>
          <tr>
            {['Question', 'Answer'].map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tableData).map(([question, answer], i) =>
            <tr key={i}>
              <td className='qpp-table-text-align'>{question}</td>
              {envConfig.htmlRegex.test(answer)
                ? <td className='qpp-table-text-align' dangerouslySetInnerHTML={{ __html: answer }} />
                : <td className='qpp-table-text-align' >{answer}</td>
              }
            </tr>,
          )}
        </tbody>
      </table>
      <h3 className='ds-h3'>PY23 Questions and Known Issues</h3>
      <table className='ds-c-table ds-u-font-size--small faq-table'>
        <thead>
          <tr>
            {['Question', 'Answer'].map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tableData1).map(([question, answer], i) =>
            <tr key={i}>
              <td className='qpp-table-text-align'>{question}</td>
              {envConfig.htmlRegex.test(answer)
                ? <td className='qpp-table-text-align' dangerouslySetInnerHTML={{ __html: answer }} />
                : <td className='qpp-table-text-align' >{answer}</td>
              }
            </tr>,
          )}
        </tbody>
      </table>
    </>
  );
};

export default FrequentlyAskedQuestions;
