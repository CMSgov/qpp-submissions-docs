import { NavLink } from 'react-router-dom';

import Routes, { IPath } from '../routes';

import '../../styles/components/left-nav.scss';

const leftNavPaddingClasses = 'ds-u-padding-right--3 ds-u-padding-left--3 ds-u-padding-top--1';

const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const buildLinkListItem = ({ path, exact, linkText }: IPath) =>
  <li
    key={path}
    className='ds-c-vertical-nav__item'
    onClick={scrollToTop}
  >
    <NavLink
      to={path}
      exact={exact}
      className={`ds-c-vertical-nav__label ${leftNavPaddingClasses}`}
      activeClassName='ds-c-vertical-nav__label--current'
    >
      {linkText}
    </NavLink>
  </li>;

const LeftNav = () => {
  return (
    <ul className='ds-c-list--bare ds-u-padding-top--2'>
      {Routes && Routes.map(({ groupTitle, paths }, i) =>
        <li key={i}>
          <ul className='ds-c-vertical-nav left-nav'>
            <li className={`ds-c-vertical-nav__item ds-u-font-weight--semibold ${leftNavPaddingClasses}`}>
              {groupTitle.toUpperCase()}
            </li>
            {paths.map((p) => buildLinkListItem(p))}
          </ul>
        </li>,
      )}
    </ul>
  );
};

export default LeftNav;
