import { Stack, StackProps } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

export interface SectionContentProps {
  children: ReactNode | ReactNode[];
}

const SectionContent: FC<SectionContentProps & StackProps> = ({
  children,
  p = 8,
  ...rest
}) => {
  return (
    <Stack {...rest} p={p}>
      {children}
    </Stack>
  );
};

SectionContent.displayName = 'SectionContent';

export default SectionContent;
