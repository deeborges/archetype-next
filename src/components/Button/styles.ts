/* eslint-disable @typescript-eslint/no-non-null-assertion */

import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export type ContentProps = ButtonProps;

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
  ${({ color, height, marginBottom, theme, width }) => css`
    align-items: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.size.default};
    font-weight: ${theme.font.weight[700]};
    grid-auto-flow: column;
    justify-content: center;
    height: ${height ?? '52px'};
    text-decoration: none;
    transition: 0.25s;
    padding: 1rem 1.5rem;
    width: ${width ?? '100%'};

    &:disabled {
      background-color: #c5efd6;
      color: #fff;
      cursor: not-allowed;
      &:hover {
        background-color: #c5efd6;
      }
    }

    ${!!color && modifiers.colors[color!]};
    ${!!marginBottom && `margin-bottom: ${marginBottom}`};
  `}
`;
