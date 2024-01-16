import { HTMLAttributes } from 'react';

export const ExternalLink = ({ href, text, attrs }: { href: string, text?: string, attrs?: HTMLAttributes<{}> }) => {
  if (!text) {
    switch (true) {
      case href.indexOf('https:') === 0:
        text = href.slice(8);
        break;
      case href.indexOf('http:') === 0:
        text = href.slice(7);
        break;
      default:
        text = href;
    }
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      {...attrs}
    >
      {text}
    </a>
  );
};
