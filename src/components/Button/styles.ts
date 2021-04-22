import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContentProps = {} & Pick<ButtonProps, 'color' | 'height' | 'width'>;

const modifiers = {
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
      background: #ffffff;
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
  ${({ color, height, width }) => css`
    // TODO
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    display: flex;
    cursor: pointer;
    grid-auto-flow: column;
    padding: 1rem 1.5rem;
    width: ${width ?? '320px'};
    height: ${height ?? '52px'};
    transition: 0.25s;
    max-width: 328px;

    @media screen and (max-width: 320px) {
      width: 232px;
    }

    ${!!color && modifiers.colors[color]}

    &:disabled {
      background-color: #c5efd6;
      color: #fff;
      cursor: not-allowed;
    }
  `}
`;
