import { css } from '@emotion/react';

export const style = {
  content: (background: string, borderRadius: number) =>
    css({
      padding: '0 48px',
      minHeight: 380,
      background,
      borderRadius,
    }),
};
