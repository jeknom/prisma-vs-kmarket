import { getDefaultBackgroundColor } from '@core/utils';
import { Badge, Card, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import React, { FC } from 'react';

import { Appear } from '../Animations';

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
    maxWidth: 360,
  },
  card: {
    backgroundColor: isBestOffer
      ? theme.colors.orange[3]
      : getDefaultBackgroundColor(theme),
    color: isBestOffer ? theme.colors.indigo[5] : undefined,
  },
}));

const ProductCard: FC<ProductCardProps> = ({
  currencySymbol,
  name,
  price,
  description,
  isDiscounted = false,
  isBestOffer = false,
}) => {
  const { classes } = useStyles(isBestOffer);

  return (
    <Appear className={classes.root}>
      <Card className={classes.card} shadow="sm">
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
    </Appear>
  );
};

export default ProductCard;
