import { GlobalStyle, RootLayout } from '@core/components';
import { useTheme } from '@core/hooks';
import { ColorScheme, MantineProvider } from '@mantine/core';
import Main from 'pages/Main';
import React, { useState } from 'react';

function App() {
  const [colorScheme] = useState<ColorScheme>('dark');
  const theme = useTheme({ colorScheme });

  return (
    <MantineProvider theme={theme}>
      <GlobalStyle />
      <RootLayout>
        <Main />
      </RootLayout>
    </MantineProvider>
  );
}

export default App;
