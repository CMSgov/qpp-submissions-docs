import { useLayoutEffect } from 'react';

export const LockBodyScroll = () => {
  useLayoutEffect((): any => {
    const currentOverflowProp = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => document.body.style.overflow = currentOverflowProp;
  }, []);
};
