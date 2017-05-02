import React from 'react';

import favicon from '../../node_modules/uswds/dist/img/favicons/favicon-57.png';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="usa-header-basic" role="banner">
        <div className="usa-banner">
          <div className="usa-accordion">
            <header className="usa-banner-header">
              <div className="usa-grid container ds-u-padding-y--1 ds-u-font-size--small">
              <img src={favicon}
                alt="U.S. flag"
                height="16"
                className="ds-u-margin-right--1 ds-u-valign--middle"
              />
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
