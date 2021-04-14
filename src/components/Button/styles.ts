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
      return '#25bb89';
    case 'danger':
      return '#e05b61';
    case 'primary':
      return '#095a93';
    default:
      return '#fff';
  }
};

const getColorText = ({ color }: Pick<ButtonProps, 'color'>) => {
  switch (color) {
    case 'default':
      return '#fff';
    case 'danger':
      return '#8a1c26';
    case 'primary':
      return '#f4f8fa';
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

    ${!!size && modifiers[size]};
    ${!!fullWidth && modifiers.fullWidth};

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.7);
    }

    &:hover {
      filter: brightness(0.8);
      transition: 0.3s;
    }
  `}
`;
