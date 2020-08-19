import React from 'react';
import { withRouter } from 'react-router-dom';

import history from '../../history';
import { combinedRoutes } from '../routes';

const DropdownNav = () => {
  return (
    <form>
      <select
        className='ds-c-field ds-c-field--select'
        value={history.location.pathname}
        onChange={(e) => history.push(e.target.value)}
      >
        {combinedRoutes.map(({ path, linkText }, i) =>
          <option
            key={i}
            value={path}
          >
            {linkText}
          </option>,
        )}
      </select>
    </form>
  );
};

export default withRouter(DropdownNav);
