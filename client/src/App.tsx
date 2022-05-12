import { GlobalStyle, Section } from '@core/components';
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
      <Section mt={60}>
        <Section.Header>Add search bar here</Section.Header>
        <Section.Content>
          <Main />
        </Section.Content>
      </Section>
    </MantineProvider>
  );
}

export default App;
