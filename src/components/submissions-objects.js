import React from 'react';

export default class SubmissionsObjects extends React.Component {
  render() {
    return (
      <div>
        <p className='ds-text'>The Submissions API has three types of objects:</p>
        <ul>
          <li><b>Submissions</b> contain any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group.</li>
          <li><b>Measurement sets</b> represent a set of performance data related to one specific category (Quality, Improvement Activities, or Advancing Care Information), and is tied to a submission object.</li>
          <li><b>Measurements</b> represent one single data point related to a specific measure in a given category, and is tied to a measurement set object.</li>
        </ul>
      </div>
    );
  };
};
