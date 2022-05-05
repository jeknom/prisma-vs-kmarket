import { MantineThemeOverride } from '@mantine/core';

const useTheme = (options?: MantineThemeOverride) => ({
  ...options,
  fontFamily: 'Open Sans, sans serif',
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
});

export default useTheme;
