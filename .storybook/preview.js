import React, { useEffect, useState } from 'react';
import addons from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../src/core/components/GlobalStyle';
import useTheme from '../src/core/hooks/useTheme';

const channel = addons.getChannel();

addDecorator((story) => {
  const [isDark, setIsDark] = useState(false);
  const theme = useTheme({ colorScheme: isDark ? 'dark' : 'light' });

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
  }, [channel, setIsDark]);

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
};
