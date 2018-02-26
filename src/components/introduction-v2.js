import React from 'react';
import { Link } from 'react-router-dom';

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Quality Payment Program Submissions API Closed for Official Reporting</h2>
        <p className='ds-text--lead'>Performance data for the 2017 Quality Payment Program (QPP) must be submitted by March 31, 2018. After this date, 2017 Qualified Registries and Qualified Clinical Data Registries who have an API token will have limited access to specific endpoints of the Submissions API.</p>
      
        <h2 className='ds-h2'>API Access After the 2017 QPP Submission Window Closes</h2>

        <p className='ds-text'>After March 31, 2018, 2017 Qualified Registries and Qualified Clinical Data Registries who have an API token will not be able to access <b>write</b> and <b>update</b> endpoints in the production environment. In other words, the following endpoints, which were available during the submission window, will no longer be accessible:</p>

       MeasurementSets
       <ul>
          <li>POST /measurement-sets </li>
          <li>PUT, PATCH, POST, DELETE /measurement-sets/<span>&#123;id&#125;</span></li>
        </ul>
        
        Measurements
        <ul>
          <li>POST /measurements</li>
          <li>PUT, PATCH, POST, DELETE /measurements/<span>&#123;id&#125;</span></li>
        </ul>

        <p className='ds-text'>Attempting to access any of these endpoints after March 31, 2018 will return a 401 error.</p>
        <p className='ds-text'>POST https://qpp.cms.gov/api/submissions/submissions/score-preview will still be accessible, as this data is not persisted. Please remember that this endpoint will not return a score for special scoring scenarios.</p>
        
         <p className='ds-text'>GET https://qpp.cms.gov/api/submissions/submissions/<span>&#123;id&#125;</span>/score will also remain accessible. Please note that this endpoint returns the score for a submission object, and does not represent the final score for a TIN/NPI.</p> 
        
        <h2 className='ds-h2'>Stay Up Date</h2>
        <p className='ds-text'>The QPP APIs Google Group is where developers and the CMS QPP Product Managers discuss your questions and feedback. New announcements and discussions are being added everyday.</p>
        <p className='ds-text'>For questions about QPP measures, scores, policy or how the program works, please contact the Quality Payment Program Service Center at QPP@cms.hhs.gov or 1-866-288-8292.</p>

      </div>
    );
  }
}

export default Introduction;