import { storybookPaths } from '@core/constants';

const getStorybookPathForCoreComponent = (componentName: string) => {
  return `${storybookPaths.COMPONENTS}/${componentName}`;
};

export default getStorybookPathForCoreComponent;
