import { getDefaultBackgroundColor } from '@core/utils';
import {
  Badge,
  Card,
  CardProps,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React, { FC } from 'react';

export interface ProductCardProps {
  currencySymbol: string;
  name: string;
  price: number;
  description?: string;
  isDiscounted?: boolean;
  isBestOffer?: boolean;
}

const useStyles = createStyles((theme, isBestOffer: boolean) => ({
  root: {
    backgroundColor: isBestOffer
      ? theme.colors.orange[3]
      : getDefaultBackgroundColor(theme),
    color: isBestOffer ? theme.colors.indigo[5] : undefined,
    maxWidth: 360,
  },
}));

const ProductCard: FC<ProductCardProps & CardProps<any>> = ({
  className,
  currencySymbol,
  name,
  price,
  description,
  isDiscounted = false,
  isBestOffer = false,
  ...rest
}) => {
  const { classes, cx } = useStyles(isBestOffer);

  return (
    <Card {...rest} className={cx(className, classes.root)} shadow="sm">
      <Stack spacing={8}>
        <Group align="center" position="apart">
          <Title order={4}>{name}</Title>
          <Badge color={isDiscounted ? 'pink' : 'blue'}>
            {price}
            {currencySymbol}
          </Badge>
        </Group>
        {description && <Text>{description}</Text>}
      </Stack>
    </Card>
  );
};

export default ProductCard;
