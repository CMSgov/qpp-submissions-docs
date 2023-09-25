import React from 'react';

import { CodeTab, ApiExample  } from '../../../shared';
import { steps, apiExamples } from './data';

const SubgroupTutorial = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 09/25/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Tutorial: Submit Mips Value Pathways (MVP) Data for Sugroups</h2>
      <p>
        The Submissions API will accept MVP Submissions for Performance Year 2023. MVP submissions for subgroups must contain:
        <ul>
            <li>A Subgroup Identifier</li>
            <li>MVP Identifier that the Subgroup is registered</li>
        </ul>
        Subgroups can only report MVP's and must be registered. Data submitted for a Subgroup that does not exist in eligibility or does not have the correct MVP will be rejected. All MVP IDs and associated measures by MVP are available in <a href='https://github.com/CMSgov/qpp-measures-data/blob/develop/mvp/2023/mvp.json' rel='noopener noreferrer' target='_blank'>mvp-measures-data</a>.
      </p>
      <p>
        When submitting an MVP for a Subgroup, you must pass the <code>entityType</code>, <code>entityId</code>, and <code>programName</code> fields to specify to the API you are reporting an MVP for a subgroup.
      </p>
      <ApiExample data={apiExamples.subgroup} />
      <CodeTab data={steps.subgroup1} />
    </>
  );
};

export default SubgroupTutorial;
