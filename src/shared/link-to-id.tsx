import { HTMLAttributes } from 'react';

import { HashLink } from '@xzar90/react-router-hash-link';

export const LinkToId = ({ to, text, offset = '1', attrs }: { to: string, text: string, offset?: string, attrs?: HTMLAttributes<object> }) => {
  return (
    <HashLink
      to={!to.includes('#') ? `../${to}#${to}` : `../${to}`}
      scroll={el => {
        el.scrollIntoView(true);
        window.scrollBy({ top: -Number(offset), behavior: 'smooth' });
      }}
      {...attrs}
    >
      {text}
    </HashLink>
  );
};
