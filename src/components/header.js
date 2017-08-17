import React from 'react';

class Header extends React.PureComponent {
  render() {
    return (
      <header id='top'>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <div className='header-mobile-brand'>
                <a className='header-brand' href='https://qpp.cms.gov/'>
                  <img className='qpp-logo' src='https://qpp.cms.gov/images/qpp_logo_rgb_color.png' alt='qpp logo' />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
