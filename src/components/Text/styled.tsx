import styled, { css, DefaultTheme } from 'styled-components';
import { TextProps } from '.';

type modifiersProps = {
  theme: DefaultTheme;
} & Pick<TextProps, 'tag' | 'weight' | 'fontSize' | 'type'>;

const modifiers = {
  type: {
    headline: ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.weight[400]};
      line-height: ${theme.font.size.xl_2};
    `,
    title: ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.medium};
      font-weight: ${theme.font.weight[400]};
      line-height: ${theme.font.size.medium};
    `,
    'subheading-1': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.default};
      font-weight: ${theme.font.weight[400]};
      line-height: ${theme.font.size.xl_2};
    `,
    'subheading-2': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.default};
      font-weight: ${theme.font.weight[700]};
      line-height: ${theme.font.size.large};
    `,
    'body-1': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.weight[400]};
      line-height: ${theme.font.size.medium};
    `,
    'body-2': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.weight[600]};
      line-height: ${theme.font.size.medium};
    `,
    'body-3': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.weight[700]};
      line-height: ${theme.font.size.medium};
    `,
    'caption-1': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.xsmall};
      font-weight: ${theme.font.weight[400]};
      line-height: ${theme.font.size.default};
    `,
    'caption-2': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.xsmall};
      font-weight: ${theme.font.weight[600]};
      line-height: ${theme.font.size.medium};
    `,
    'caption-3': ({ theme }: modifiersProps) => css`
      font-size: ${theme.font.size.xsmall};
      font-weight: ${theme.font.weight[700]};
      line-height: ${theme.font.size.medium};
    `
  }
};

export const styledText = ({
  tag = 'p',
  type = 'body-1',
  fontSize = 'default'
}: TextProps) => styled(tag)`
  ${({ theme }: modifiersProps) => css`
    ${!type && `font-size: ${theme.font.size[fontSize]}`};
    ${!type && `font-weight: ${theme.font.weight[400]}`};
    ${type && modifiers.type[type]};
  `}
`;
