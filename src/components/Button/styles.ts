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
    height: auto;
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
      return '#fff';
    default:
      return '#212121';
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
    color: ${!!color && getColorText};
    cursor: pointer;
    background-color: #212121;
    padding: 1rem 1.5rem;

    ${!!size && modifiers.x_small}
    ${!!fullWidth && modifiers.fullWidth};

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      filter: brightness(0.8);
      transition: 0.3s;
    }
  `}
`;
