import styled, { css, DefaultTheme } from 'styled-components';

import { TextProps } from '.';

type modifiersProps = {
  theme: DefaultTheme;
} & Pick<TextProps, 'tag' | 'type'>;

const modifiers = {
  common: ({ type, theme }: modifiersProps) => {
    switch (type) {
      case 'body-1':
        return css`
          font-size: ${theme.typography.size.large};
          font-weight: ${theme.typography.weight[400]};
        `;
      case 'body-2':
        return css`
          font-size: ${theme.typography.size.medium};
          font-weight: ${theme.typography.weight[400]};
        `;
      case 'caption':
        return css`
          font-size: ${theme.typography.size.small};
          font-weight: ${theme.typography.weight[400]};
        `;
      case 'label':
        return css`
          font-size: ${theme.typography.size.medium};
          font-weight: ${theme.typography.weight[600]};
        `;
      case 'subtitle':
        return css`
          font-size: ${theme.typography.size.large};
          font-weight: ${theme.typography.weight[600]};
        `;
      default:
        return css`
          font-size: ${theme.typography.size.default};
          font-weight: ${theme.typography.weight[300]};
        `;
    }
  }
};

export const styledText = ({ tag, type, weight }: TextProps) => styled(tag)`
  ${type && modifiers.common};
  font-weight: ${weight};
`;
