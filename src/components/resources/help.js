import React from 'react';

class Help extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2'>Help</h2>

        <p className='ds-text'>
          Please contact the Quality Payment Program Service Center <a href='https://qpp.cms.gov/about/help-and-support' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/about/help-and-support</a> if you have policy or API questions.
        </p>

        <p className='ds-text'>
          For information around Quality Payment Program requirements, please visit <a href='https://qpp.cms.gov' target='_blank' rel='noopener noreferrer'>qpp.cms.gov</a>
        </p>

        <p className='ds-text'>
          For frequently asked questions regarding Developer Preview API’s please see the <a href='/frequently-asked-questions'>FAQ Section</a>
        </p>

        <p className='ds-text'>
          Please bring any questions not answered by our available documentation to the monthly support calls/Virtual Office Hours.  Or contact the Quality Payment Program service center: <a href='https://qpp.cms.gov/about/help-and-support' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/about/help-and-support</a>
        </p>
      </div>
    );
  }
}

export default Help;
