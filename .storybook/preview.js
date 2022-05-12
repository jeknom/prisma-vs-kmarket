import React from 'react';
import { addDecorator } from '@storybook/react';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../src/core/components/GlobalStyle';
import useTheme from '../src/core/hooks/useTheme';
import { themes } from '@storybook/theming';

addDecorator((story) => {
  const theme = useTheme({ colorScheme: 'dark' });

  return (
    <MantineProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </MantineProvider>
  );
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: true,
  docs: {
    theme: themes.dark,
  },
};
