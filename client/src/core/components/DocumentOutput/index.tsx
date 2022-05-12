import { Text } from '@mantine/core';
import React, { FC } from 'react';

interface DocumentOutputProps {
  text: string;
}

const DocumentOutput: FC<DocumentOutputProps> = ({ text }) => {
  return <Text style={{ color: 'white' }}>{text}</Text>;
};

export default DocumentOutput;
