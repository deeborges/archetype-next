import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContentProps = {} & Pick<
  ButtonProps,
  'fullWidth' | 'color' | 'size' | 'variant'
>;

const modifiers = {
  x_small: () => css`
    height: 2rem;
    width: 12rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `
};

const getColorText = ({ color }: Pick<ButtonProps, 'color'>) => {
  switch (color) {
    case 'default':
      return 'green';
    case 'danger':
      return '#fff';
    case 'primary':
      return 'blue';
    default:
      return '#212121';
  }
};

export const Content = styled.button<ContentProps>`
  ${({ fullWidth, size, variant, color }) => css`
    border: none;
    color: ${!!color && getColorText};
    cursor: pointer;
    background-color: black;
    padding: 12px;

    ${!!size && modifiers.x_small}
    ${!!fullWidth && modifiers.fullWidth};
  `}
`;
