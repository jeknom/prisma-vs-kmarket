import { BackgroundColorVariant, getDefaultBackgroundColor } from '@core/utils';
import { Center, createStyles, Stack } from '@mantine/core';
import { Text } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode | ReactNode[];
}

const useStyles = (
  variant: BackgroundColorVariant = BackgroundColorVariant.PRIMARY,
  offset = 0,
) =>
  createStyles((theme) => ({
    background: {
      color: variant === BackgroundColorVariant.PRIMARY ? 'white' : 'black',
      backgroundColor: getDefaultBackgroundColor(theme, variant, offset),
    },
  }))();

const Background: FC<BackgroundProps> = ({ children }) => {
  const primary = useStyles();
  const slightlyLighter = useStyles(BackgroundColorVariant.PRIMARY, -1);
  const slightlyDarker = useStyles(BackgroundColorVariant.PRIMARY, 1);
  const secondary = useStyles(BackgroundColorVariant.SECONDARY);
  const slightlyLighterSecondary = useStyles(BackgroundColorVariant.SECONDARY, -1);
  const slightlyDarkerSecondary = useStyles(BackgroundColorVariant.SECONDARY, 1);

  return (
    <Stack>
      <Center p={8} className={primary.classes.background}>
        <Text>This is an example text</Text>
      </Center>
      <Center p={8} className={slightlyLighter.classes.background}>
        <Text>This is an example text</Text>
      </Center>
      <Center p={8} className={slightlyDarker.classes.background}>
        <Text>This is an example text</Text>
      </Center>
      <Center p={8} className={secondary.classes.background}>
        <Text>This is an example text</Text>
      </Center>
      <Center p={8} className={slightlyLighterSecondary.classes.background}>
        <Text>This is an example text</Text>
      </Center>
      <Center p={8} className={slightlyDarkerSecondary.classes.background}>
        <Text>This is an example text</Text>
      </Center>
    </Stack>
  );
};

export default Background;
