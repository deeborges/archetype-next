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
  small: () => css`
    height: 3rem;
    width: 12rem;
  `,
  medium: () => css`
    height: 4rem;
    width: 12rem;
  `,
  large: () => css`
    height: 5rem;
    width: 12rem;
  `,
  fullWidth: () => css`
    height: auto;
    width: 100%;
  `
};

const getBackgroundColor = ({ color }: Pick<ButtonProps, 'color'>) => {
  switch (color) {
    case 'default':
      return '#0CD15B';
    case 'danger':
      return '#8d8d8d';
    case 'primary':
      return '#434343';
    default:
      return '#7f7f7f';
  }
};

const getColorText = ({ color }: Pick<ButtonProps, 'color'>) => {
  switch (color) {
    case 'default':
      return '#fff';
    case 'danger':
      return '#fff';
    case 'primary':
      return '#7f7f7f';
    default:
      return '#fff';
  }
};

export const Content = styled.button<ContentProps>`
  ${({ fullWidth, size, variant, color }) => css`
    // TODO
    grid-auto-flow: column;
    align-content: center;
    align-items: center;
    display: grid;

    border: none;
    cursor: pointer;
    color: ${!!color && getColorText};
    background-color: ${getBackgroundColor};
    padding: 1rem 1.5rem;

    border-radius: 4px;

    ${!!size && modifiers[size]};
    ${!!fullWidth && modifiers.fullWidth};

    &:disabled {
      cursor: not-allowed;
      background-color: #aae7c2;
    }
  `}
`;
