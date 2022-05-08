import { findReactChildByType } from '@core/utils';
import { createStyles, Stack, StackProps } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

import SectionContent, { SectionContentProps } from './SectionContent';
import SectionHeader, { SectionHeaderProps } from './SectionHeader';

export interface SectionSubcomponents {
  Header: FC<SectionHeaderProps>;
  Content: FC<SectionContentProps>;
}

export interface SectionProps {
  children?: ReactNode | ReactNode[];
}

const useStyles = createStyles((theme) => {
  return {
    root: {
      backgroundColor:
        theme.colorScheme === 'light' ? theme.colors.teal[1] : theme.colors.dark[5],
      borderRadius: theme.radius.sm,
      width: 'calc(100% - 260px)',
      maxWidth: 820,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };
});

const Section: FC<SectionProps & StackProps> & SectionSubcomponents = ({
  className,
  children,
  pb = 8,
  ...rest
}) => {
  const { classes, cx } = useStyles();

  return (
    <Stack {...rest} className={cx(className, classes.root)} pb={pb}>
      {findReactChildByType(children, SectionHeader)}
      {findReactChildByType(children, SectionContent)}
    </Stack>
  );
};

Section.Header = SectionHeader;
Section.Content = SectionContent;

export default Section;
