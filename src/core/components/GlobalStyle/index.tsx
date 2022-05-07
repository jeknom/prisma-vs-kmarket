import { Global } from '@mantine/core';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      html: {
        margin: 0,
        padding: 0,
      },

      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        minWidth: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
      },
    })}
  />
);

export default GlobalStyle;
