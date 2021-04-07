import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

// eslint-disable-next-line @typescript-eslint/ban-types
type ContentProps = {} & Pick<ButtonProps, 'fullWidth' | 'color'>;

const modifiers = {
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
  ${({ fullWidth, color }) => css`
    border: none;
    color: ${!!color && getColorText};
    cursor: pointer;
    ${!!fullWidth && modifiers.fullWidth()};
    height: 42px;
    background-color: black;
    padding: 12px;
  `}
`;
