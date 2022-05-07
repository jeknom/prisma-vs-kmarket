import { RootLayout as RootLayoutComponent } from '@core/components';
import { Text, Title } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'components/RootLayout',
  component: RootLayoutComponent,
} as ComponentMeta<typeof RootLayoutComponent>;

const Template: ComponentStory<typeof RootLayoutComponent> = () => (
  <RootLayoutComponent>
    <Title>This is a title</Title>
    <Text>This is some content</Text>
  </RootLayoutComponent>
);

export const RootLayout = Template.bind({});
RootLayout.storyName = 'RootLayout';
