import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  tag: any;
  children: string;
  variants?: 'heading-1';
}

export const styledText = ({ tag, variants }: Props) => styled(tag)<Props>`
  ${() =>
    variants == 'heading-1' &&
    css`
      border: none;
      cursor: pointer;
      height: 42px;
      color: red;
      padding: 12px;
    `}
`;

export const Text = (props: Props) => {
  const Text = styledText({ ...props });
  return <Text {...props}>{props.children}</Text>;
};
