import { Appear as AppearComponent } from '@core/components/Animations';
import { buildStorybookPath, StorybookSection } from '@core/utils';
import { Title } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: buildStorybookPath(StorybookSection.ANIMATIONS, 'Appear'),
  component: AppearComponent,
} as ComponentMeta<typeof AppearComponent>;

const Template: ComponentStory<typeof AppearComponent> = (args) => (
  <AppearComponent {...args} />
);

export const Appear = Template.bind({});
Appear.args = {
  children: <Title>Appear example</Title>,
};
