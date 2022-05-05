import { ColorScheme, Global, MantineProvider } from '@mantine/core';
import { RootLayout } from 'components';
import { useTheme } from 'hooks';
import Main from 'pages/Main';
import React, { useState } from 'react';

function App() {
  const [colorScheme] = useState<ColorScheme>('dark');
  const theme = useTheme({ colorScheme });

  return (
    <MantineProvider theme={theme}>
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
      <RootLayout>
        <Main />
      </RootLayout>
    </MantineProvider>
  );
}

export default App;
