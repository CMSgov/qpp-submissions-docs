import React from 'react';

const htmlRegex = /<\/?[a-z][\s\S]*>/i;
const tableData = {
  'If I am an EHR, how can I submit MIPS Quality data for my clients?': `
    <ul>
      <li>
        Submissions UI: EHRs can submit via the Submissions UI by logging into the QPP site <a href='https://www.qpp.cms.gov' target='_blank' rel='noopener noreferrer'>qpp.cms.gov</a>. They will have to be connected as a Staff user for each of the Individuals and Groups they need to submit quality data for. Submissions for each individual or group could be uploaded as an excel file for efficiency.
      </li>
      <li>
        Burden Reduction: EHRs may apply for Burden Reduction which allows them to obtain a registry token to use to submit via the Submissions API. See the process outline in this <a href='https://groups.google.com/forum/#!msg/qpp-apis/EKqpKejepwY/uPrgllFiDQAJ' target='_blank' rel='noopener noreferrer'>Google Group post</a>
      </li>
      <li>
        OAUTH: You can use OAUTH to submit quality data to the Submissions API. See <a href='/getting-started-with-oauth2'>Getting Started with OAUTH</a>.
      </li>
    </ul>
  `,
  'If I am an APM entity, how can I submit MIPS Quality data?': `
    You can use OAUTH to submit quality data to the Submissions API. See <a href='/getting-started-with-oauth2'>Getting Started with OAUTH</a>.
  `,
  'What is the performance threshold for the Submissions API?': '25 rps avg threshold, 40 rps burst threshold.'
};
class FrequentlyAskedQuestions extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Frequently Asked Questions</h2>

        <h3 className='ds-h3'>General</h3>
        <p>
          See <a href='https://cmsgov.github.io/qpp-developer-preview-docs/frequently-asked-questions' target='_blank' rel='noopener noreferrer'>Developer Preview Frequently Asked Questions</a>
        </p>

        <h3 className='ds-h3'>Developer Preview</h3>
        <p>
          See <a href='https://cmsgov.github.io/qpp-developer-preview-docs/frequently-asked-questions' target='_blank' rel='noopener noreferrer'>Developer Preview Frequently Asked Questions</a>
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
                <td>{question}</td>
                {htmlRegex.test(answer)
                  ? <td dangerouslySetInnerHTML={{ __html: answer }} />
                  : <td>{answer}</td>
                }
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FrequentlyAskedQuestions;
