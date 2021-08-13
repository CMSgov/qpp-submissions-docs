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

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
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
    </>
  );
};

export default FrequentlyAskedQuestions;
