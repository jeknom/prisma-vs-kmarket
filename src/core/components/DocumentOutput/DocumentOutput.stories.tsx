import { DocumentOutput as DocumentOutputComponent } from '@core/components';
import { buildStorybookPath, StorybookSection } from '@core/utils';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: buildStorybookPath(StorybookSection.COMPONENTS, 'DocumentOutput'),
  component: DocumentOutputComponent,
} as ComponentMeta<typeof DocumentOutputComponent>;

const Template: ComponentStory<typeof DocumentOutputComponent> = (args) => (
  <DocumentOutputComponent {...args} />
);

export const DocumentOutput = Template.bind({});
DocumentOutput.args = {
  text: 'Injecting variables into .mdx docs in Storybook can be difficult. I am here to help!',
};
