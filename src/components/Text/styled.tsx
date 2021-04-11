import styled, { css, DefaultTheme } from 'styled-components';
import { TextProps } from '.';

type modifiersProps = {
  theme: DefaultTheme;
} & Pick<TextProps, 'tag' | 'type' | 'weight' | 'fontSize'>;

const modifiers = {
  common: ({ type, theme, fontSize, weight }: modifiersProps) => {
    switch (type) {
      case 'body-1':
        return css`
          font-size: ${theme.font.size[fontSize || 'large']};
          font-weight: ${theme.font.weight[weight || 400]};
        `;
      case 'body-2':
        return css`
          font-size: ${theme.font.size.medium};
          font-weight: ${theme.font.weight[400]};
        `;
      case 'caption':
        return css`
          font-size: ${theme.font.size.small};
          font-weight: ${theme.font.weight[400]};
        `;
      case 'label':
        return css`
          font-size: ${theme.font.size.medium};
          font-weight: ${theme.font.weight[600]};
        `;
      case 'subtitle':
        return css`
          font-size: ${theme.font.size.large};
          font-weight: ${theme.font.weight[600]};
        `;
      default:
        return;
    }
  }
};

export const styledText = ({
  tag = 'p',
  type,
  fontSize = 'default'
}: TextProps) => styled(tag)`
  ${({ theme }: modifiersProps) => css`
    ${!type && `font-size: ${theme.font.size[fontSize]}`};
    ${!type && `font-weight: ${theme.font.weight[400]}`};
    ${type && modifiers.common};
  `}
`;
