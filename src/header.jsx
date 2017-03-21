import React from 'react';

import favicon from '../node_modules/uswds/dist/img/favicons/favicon-57.png';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="usa-header-basic" role="banner">
        <div className="usa-banner">
          <div className="usa-accordion">
            <header className="usa-banner-header">
              <div className="usa-grid usa-banner-inner">
              <img src={favicon} alt="U.S. flag"/>
              <p>An official website of the United States government</p>
              </div>
            </header>
          </div>
        </div>
      </header>
    );
  }
}


  export default Header;
