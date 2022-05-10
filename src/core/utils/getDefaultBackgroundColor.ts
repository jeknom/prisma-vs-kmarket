import {
  DARK_BACKGROUND_COLOR_INDEX,
  LIGHT_BACKGROUND_COLOR_INDEX,
} from '@core/constants/colorIndices';
import { MantineTheme } from '@mantine/core';

const getDefaultBackgroundColor = (theme: MantineTheme, offset: number = 0) => {
  const darkIndexWithOffset = DARK_BACKGROUND_COLOR_INDEX + offset;
  const lightIndexWithOffset = LIGHT_BACKGROUND_COLOR_INDEX + offset;

  if (darkIndexWithOffset < 0 || darkIndexWithOffset > 8) {
    throw new Error('Offset is invalid for the dark index!');
  } else if (lightIndexWithOffset < 0 || lightIndexWithOffset > 8) {
    throw new Error('Offset is invalid for the light index!');
  }

  return theme.colorScheme === 'dark'
    ? theme.colors.dark[darkIndexWithOffset]
    : theme.colors.gray[lightIndexWithOffset];
};

export default getDefaultBackgroundColor;
