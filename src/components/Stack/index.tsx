import React from 'react';
import { Content } from './styled';

export type StackProps = {
  children: React.ReactNode;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
};

export const Stack = ({
  children,
  margin,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight
}: StackProps) => (
  <Content
    margin={margin}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    {children}
  </Content>
);
