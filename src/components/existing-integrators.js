import React from 'react';

class ExistingIntegrators extends React.Component {
  render() {
    return (
      <div>
        <h1 className='ds-h1'>Existing API Integrators</h1>

        <h2 className='ds-h2'>API Access for 2017 Qualified Registries and Qualified Clinical Data Registries</h2>
        <p className='ds-text'>After April 3, 2018, 2017 Qualified Registries and Qualified Clinical Data Registries who have an API token will not be able to access write and update endpoints in the production environment. In other words, the following endpoints, which were available during the Year 1 submission window, will no longer be accessible:</p>
        <ul>
          <li>PUT, PATCH, POST, DELETE https://qpp.cms.gov/api/submissions/measurement-sets/</li>
          <li>PUT, PATCH, POST, DELETE https://qpp.cms.gov/api/submissions/measurements/</li>
        </ul>
        <p className='ds-text'>Attempting to access any of these endpoints after 8 PM EDT on April 3, 2018 will return a 401 error.</p>
        <p className='ds-text'>POST https://qpp.cms.gov/api/submissions/submissions/score-preview will still be accessible, as this data is not persisted. Please remember that this endpoint will not return a score for special scoring scenarios.</p>
        <p className='ds-text'>GET https://qpp.cms.gov/api/submissions/submissions/:id/score will also remain accessible. Please note that this endpoint returns the score for a submission object, and does not represent the final score for a TIN/NPI.</p>
      </div>
    );
  }
}

export default ExistingIntegrators;
