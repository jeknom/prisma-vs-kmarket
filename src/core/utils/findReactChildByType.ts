import React, { FC, ReactNode } from 'react';

const findReactChildByType = <T = undefined>(
  children: ReactNode,
  component: FC | FC<T>,
) => {
  const result: ReactNode[] = [];
  const type = [component.displayName] || [component.name];

  React.Children.forEach(children, (child: any) => {
    const childType =
      child && child?.type && (child?.type?.displayName || child?.type?.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });

  return result.length > 0 ? result : null;
};

export default findReactChildByType;
