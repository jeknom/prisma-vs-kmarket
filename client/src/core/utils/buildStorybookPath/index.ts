export enum StorybookSection {
  ANIMATIONS = 'animations',
  COMPONENTS = 'components',
  UTILS = 'utils',
  CONSTANTS = 'constants',
}

/**
 * Use this function to create a path for Storybook documentation.
 * @param section Enum which defines which section in storybook the doc should be placed in.
 * @param componentName The name of the component you are writing the doc for.
 * @returns A string path of the new component.
 */
const buildStorybookPath = (section: StorybookSection, componentName: string) => {
  return `${section}/${componentName}`;
};

export default buildStorybookPath;
