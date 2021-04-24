/* eslint-disable @typescript-eslint/no-non-null-assertion */

import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ContentProps = Pick<
  ButtonProps,
  'color' | 'height' | 'width' | 'marginBottom'
>;

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
  ${({ color, height, width, marginBottom }) => css`
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

    ${!!color && modifiers.colors[color!]};
    ${!!marginBottom && `margin-bottom: ${marginBottom}`};

    &:disabled {
      background-color: #c5efd6;
      color: #fff;
      cursor: not-allowed;
    }
  `}
`;
