/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;
export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;

    border: 0.15rem solid ${theme.colors.neutrals.gray700};
    border-radius: 0.15rem;
    cursor: pointer;
    display: flex;
    height: ${theme.font.size.medium};
    outline: none;
    position: relative;
    transition: background border ${theme.transition.fast};
    width: ${theme.font.size.medium};
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      align-items: center;
      border: 0.15rem solid ${theme.colors.neutrals.white};
      border-left: 0;
      border-top: 0;
      content: '';
      display: flex;
      height: 0.7rem;
      justify-content: 'center';
      opacity: 0;
      position: absolute;
      transform: rotate(45deg);
      transition: ${theme.transition.fast};
      top: -0.1rem;
      width: 0.3rem;
    }

    &:focus {
      box-shadow: 0 0 0.2rem ${theme.colors.allColors.gray700};
    }

    &:checked {
      background: ${theme.colors.primary.noverde};
      border-color: ${theme.colors.primary.noverde};
      box-shadow: none;

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors.allColors[labelColor!]};
    cursor: pointer;
    line-height: 1;
    padding-left: ${theme.font.size.xxsmall};
  `}
`;
