import { getDefaultBackgroundColor } from '@core/utils';
import { createStyles, Divider, Group, GroupProps, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { FC, ReactNode } from 'react';

export interface SectionHeaderProps {
  children: ReactNode;
}

const useStyles = createStyles((theme) => {
  return {
    root: {
      width: '100%',
      borderTopLeftRadius: theme.radius.sm,
      borderTopRightRadius: theme.radius.sm,
      backgroundColor: getDefaultBackgroundColor(theme, 1),
    },
  };
});

const SectionHeader: FC<SectionHeaderProps & GroupProps> = ({
  className,
  children,
  px = 8,
}) => {
  const { classes, cx } = useStyles();
  const isWide = useMediaQuery('(max-width: 612px)', false);
  const content =
    typeof children === 'string' ? (
      <Title order={isWide ? 5 : 2}>{children}</Title>
    ) : (
      children
    );

  return (
    <Group className={cx(className, classes.root)} px={px}>
      {content}
      <Divider />
    </Group>
  );
};

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
