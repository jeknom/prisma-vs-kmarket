import { Section as SectionComponent } from '@core/components';
import { Text } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'components/Section',
  component: SectionComponent,
  subcomponents: { Header: SectionComponent.Header },
  argTypes: {
    children: {
      description:
        'Takes any of the designated subcomponents, Section.Header or Section.Content',
      defaultValue: null,
    },
  },
} as ComponentMeta<typeof SectionComponent>;

const Template: ComponentStory<typeof SectionComponent> = (args) => (
  <SectionComponent {...args} />
);

const headerElement = <SectionComponent.Header>Header</SectionComponent.Header>;

const contentElement = (
  <SectionComponent.Content>
    <Text>This is some content</Text>
  </SectionComponent.Content>
);

export const Default = Template.bind({});
Default.args = {
  children: [headerElement, contentElement],
};

export const OnlyHeader = Template.bind({});
OnlyHeader.args = {
  children: headerElement,
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  children: contentElement,
};
