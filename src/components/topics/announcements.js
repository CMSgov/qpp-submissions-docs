import React from 'react';

class Announcements extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Announcements</h2>

        <h3 className='ds-h3'>General</h3>
        <p className='ds-text'>
          See <a href='https://cmsgov.github.io/qpp-developer-preview-docs/announcements' target='_blank' rel='noopener noreferrer'>Developer Preview Announcements</a>
        </p>

        <h3 className='ds-h3'>Submission API</h3>
        <ul>
          <li>
            Support for APM Entity Submissions:
          </li>
          <ul>
            <li>
              Registries can now submit MIPs Quality data for APM Entities through the Submissions API
            </li>
            <li>
              2020 Measures are published and available here: <a href='https://github.com/CMSgov/qpp-measures-data' target='_blank' rel='noopener noreferrer'>github.com/CMSgov/qpp-measures-data</a>
            </li>
          </ul>
          <li>
            API Cleanup and Improvements:
          </li>
          <ul>
            <li>
              Validations were added to help ensure accurate data is being submitted
            </li>
            <li>
              Error messages were improved for the Submissions API
            </li>
          </ul>
          <li>
            See <a href='#change-log' target='_blank' rel='noopener noreferrer'>Change Log</a> for specific details
          </li>
        </ul>

        <h3 className='ds-h3'>Measures Repository</h3>
        <ul>
          <li>
            Measures Repository Cleanup and Improvements:
          </li>
          <ul>
            <li>
              Measure attributes that are no longer used were deprecated
            </li>
          </ul>
          <li>
            See <a href='#change-log' target='_blank' rel='noopener noreferrer'>Change Log</a> for specific details
          </li>
        </ul>
      </div>
    );
  }
}

export default Announcements;
