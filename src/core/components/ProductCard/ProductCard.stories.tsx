import { ProductCard as ProductCardComponent } from '@core/components';
import { buildStorybookPath, StorybookSection } from '@core/utils';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: buildStorybookPath(StorybookSection.COMPONENTS, 'ProductCard'),
  component: ProductCardComponent,
  argTypes: {
    currencySymbol: {
      description: 'The unit of currency ($, €, ¢)',
    },
    name: {
      description: 'Name of the product',
    },
    price: {
      description: 'The amount the product costs',
    },
  },
} as ComponentMeta<typeof ProductCardComponent>;

const Template: ComponentStory<typeof ProductCardComponent> = (args) => (
  <ProductCardComponent {...args} />
);

export const ProductCard = Template.bind({});
ProductCard.args = {
  currencySymbol: '€',
  name: 'Orange',
  description:
    'It is a citrus fruit, with refreshing qualities. Imported straight from the land of oranges. Enjoy!',
  price: 100,
};
