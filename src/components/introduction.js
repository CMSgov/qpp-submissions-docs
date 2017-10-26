import React from 'react';
import { Link } from 'react-router-dom';

import SubmissionsObjects from './submissions-objects';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Easily submit and score QPP data in real-time via API</h2>
        <p className='ds-text--lead'>The Submissions API enables submission and real-time performance scoring of Quality Payment Program (QPP) data. CMS is inviting developers to provide feedback on the new Submissions API for the purpose of improved development. </p>
        <p className='ds-text--lead'>From July 2017 through December 2017, participants in the Developer Preview can build integrations with their software to test submission and scoring of Quality Payment Program (QPP) performance data via API.</p>
        <Link to='/developer-preview' className='ds-c-button ds-c-button--primary'>Join the QPP Developer Preview</Link>

        <h2 className='ds-h2'>Explore the API</h2>
        <SubmissionsObjects />

        <p className='ds-text'>Walk through how to create a new submission, submit measures and receive real-time scoring in the below tutorial.</p>
        <Link to='/tutorial' className='ds-c-button ds-c-button--primary'>Start the tutorial</Link>

        <p><br />Return to the <a href='https://qpp.cms.gov/resources/developers'>QPP Developer Tools</a>.</p>
      </div>
    );
  }
}

export default Introduction;
