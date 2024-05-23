import envConfig from '../../../envConfig';
import { ExternalLink } from '../../../shared';
import { DocPageProps } from '../../../shared/types';

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
  'How do I report SubGroups?': `SubGroups are available for testing in DevPre as of 9/29/23.  See the tutorial here <a href='https://cmsgov.github.io/qpp-developer-preview-docs/tutorial-subgroup-submissions' target='_blank' rel='noopener noreferrer'>QPP Developer Preview Documentation</a>`,
  'Score-preview endpoint returns a score for a MVP submission for a non-MVP registered entity.': 'Resolved as of 09/12/2023',
};

const FrequentlyAskedQuestions: React.FC<DocPageProps> = ({dataTestId}) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 09/29/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
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
    </div>
  );
};

export default FrequentlyAskedQuestions;
