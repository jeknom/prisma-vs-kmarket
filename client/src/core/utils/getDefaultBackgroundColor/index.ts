import {
  PRIMARY_BACKGROUND_COLOR_INDEX,
  SECONDARY_BACKGROUND_COLOR_INDEX,
} from '@core/constants/colorIndices';
import { MantineTheme } from '@mantine/core';

export enum BackgroundColorVariant {
  PRIMARY,
  SECONDARY,
}

/**
 * @param theme The Mantine theme instance, do not create a new instance but use the style hooks to access it.
 * @param variant Default variant gives a dark color, secondary a light one. Use this to get the user's attention.
 * @param offset Use this to make the color a bit lighter or darker.
 * @returns A background color color in string format, which can then be used to style your components.
 */
const getDefaultBackgroundColor = (
  theme: MantineTheme,
  variant: BackgroundColorVariant = BackgroundColorVariant.PRIMARY,
  offset: number = 0,
) => {
  const darkIndexWithOffset = PRIMARY_BACKGROUND_COLOR_INDEX + offset;
  const lightIndexWithOffset = SECONDARY_BACKGROUND_COLOR_INDEX + offset;

  if (darkIndexWithOffset < 0 || darkIndexWithOffset > 8) {
    throw new Error('Offset is invalid for the dark index!');
  } else if (lightIndexWithOffset < 0 || lightIndexWithOffset > 8) {
    throw new Error('Offset is invalid for the light index!');
  }

  switch (variant) {
    case BackgroundColorVariant.SECONDARY:
      return theme.colors.gray[lightIndexWithOffset];
    case BackgroundColorVariant.PRIMARY:
    default:
      return theme.colors.dark[darkIndexWithOffset];
  }
};

export default getDefaultBackgroundColor;
