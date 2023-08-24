import React from 'react';

import { CodeTab, ApiExample  } from '../../../shared';
import { steps, apiExamples } from './data';

const MvpTutroial = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/15/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Tutorial: Submit Mips Value Pathways (MVP) Data</h2>
      <p>
        The Submissions API will accept MVP Submissions for Performance Year 2023. MVP submissions must contain the MVP Identifier in the submission for the data to be applied to the correlating MVP Score. All MVP IDs and associated measures by MVP are available in <a href='https://github.com/CMSgov/qpp-measures-data/blob/develop/mvp/2023/mvp.json' rel='noopener noreferrer' target='_blank'>mvp-measures-data</a>.
      </p>
      <p>
        When submitting to an MVP, you must pass the <code>programName</code> field to specify to the API you are reporting an MVP.
      </p>
      <ApiExample data={apiExamples.mvp} />
      <CodeTab data={steps.mvp1} />
    </>
  );
};

export default MvpTutroial;
