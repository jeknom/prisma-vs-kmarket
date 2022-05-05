import { Center, createStyles } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode | ReactNode[];
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === 'light' ? theme.colors.gray[7] : theme.colors.dark[5],
  },
}));

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Center className={classes.root} mt={120} pb={120}>
      {children}
    </Center>
  );
};

export default RootLayout;
