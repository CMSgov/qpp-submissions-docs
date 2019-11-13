import React from 'react';

class SubmittingToSubmissionsApi extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>To submit directly to QPP using the Submissions API, Qualified Registries and QCDRs use CMS-provided tokens in their API calls. You can learn more about the Submissions API authentication and authorization model for Qualified Registries and QCDRs <a href='https://cmsgov.github.io/qpp-submissions-docs/qualified-registries-and-qcdrs'>here</a>.</p>
        <p className='ds-text'>Beginning with the PY2019 submission window, we are piloting OAuth Authentication, which provides client applications with secure, delegated access to the Submissions API. You can learn more about using OAuth with the Submissions API <a href='https://cmsgov.github.io/qpp-submissions-docs/getting-started-with-oauth2'>here</a>.</p>
      </div>
    );
  }
}

export default SubmittingToSubmissionsApi;
