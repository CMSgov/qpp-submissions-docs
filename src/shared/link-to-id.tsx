import { HashLink } from 'react-router-hash-link';

export const LinkToId = ({ to, text, offset = '1' }: { to: string, text: string, offset?: string }) => {
  return (
    <HashLink
      smooth to={!to.includes('#') ? `${to}#${to}` : to}
      scroll={el => {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - Number(offset)  });
      }}
    >
      {text}
    </HashLink>
  );
};
