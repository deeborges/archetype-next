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
  `,
  colors: {
    primary: () => css`
      color: #fff;
      background-color: #0cd15b;

      &:hover {
        background-color: #0bc555;
      }

      &:focus {
        background-color: #00b649;
      }
    `,
    secondary: () => css`
      color: #0cd15b;
      background: transparent;
      &:hover {
        background-color: #f6fff9;
      }

      &:focus {
        background-color: #e0ffe8;
      }
    `
  }
};

export const Content = styled.button<ContentProps>`
  ${({ fullWidth, size, color }) => css`
    // TODO
    align-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    display: grid;
    cursor: pointer;
    grid-auto-flow: column;
    padding: 1rem 1.5rem;

    ${!!color && modifiers.colors[color]}
    ${!!size && modifiers[size]};
    ${!!fullWidth && modifiers.fullWidth};

    &:disabled {
      background-color: #c5efd6;
      color: #fff;
      cursor: not-allowed;
    }
  `}
`;
