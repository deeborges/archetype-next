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
          font-size: ${theme.font.size.large};
          font-weight: ${theme.font.weight[400]};
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
        return css`
          font-size: ${theme.font.size.default};
          font-weight: ${theme.font.weight[400]};
        `;
    }
  }
};

export const styledText = ({
  tag = 'p',
  type,
  weight,
  fontSize = 'default'
}: TextProps) => styled(tag)`
  ${({ theme }: modifiersProps) => css`
    font-size: ${theme.font.size[fontSize]};
    font-weight: ${theme.font.weight[400]};
    ${type && modifiers.common};
    ${weight && `font-weight: ${weight};`}
  `}
`;
