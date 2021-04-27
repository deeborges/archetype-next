import styled, { css } from 'styled-components';
import { RadioProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input<RadioProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: ${theme.font.size.medium};
    height: ${theme.font.size.medium};
    border: 0.15rem solid ${theme.colors.allColors[color!]};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.neutrals.gray500};
    }

    &:before {
      content: '';
      width: ${theme.font.size.xxsmall};
      height: ${theme.font.size.xxsmall};
      border-radius: 50%;
      background: ${theme.colors.allColors[color!]};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.font.size.xxsmall};
    color: ${theme.colors.allColors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`;
