import React from 'react';
import { Content } from './styled';

interface StackProps {
  children: React.ReactNode;
}

export const Stack = ({ children }: StackProps) => (
  <Content>{children}</Content>
);
