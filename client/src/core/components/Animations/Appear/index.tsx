import { animated, useSpring } from '@react-spring/web';
import React, { FC, ReactNode } from 'react';

export interface AppearProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Appear: FC<AppearProps> = ({ children, ...rest }) => {
  const appearStyles = useSpring({
    to: async (next) => {
      await next({
        opacity: 1,
        y: 0,
      });
    },
    from: {
      opacity: 0,
      y: 20,
    },
  });

  return (
    <animated.div {...rest} style={appearStyles}>
      {children}
    </animated.div>
  );
};

export default Appear;
