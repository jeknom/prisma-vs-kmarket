import React, { FC, ReactNode } from 'react';

/**
 * This function is used to find a child component of specific type. This is useful when you are developing a component which has subcomponents.
 * @param children The children property of a React component. This will be iterated over to find the child.
 * @param component The react component you would like to find from the children prop.
 * @returns The child you are looking for or null if its not found.
 */
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
