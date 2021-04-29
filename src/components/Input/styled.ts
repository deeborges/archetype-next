import styled, { css } from 'styled-components';
import { InputProps } from '.';

export type ContentProps = {
  marginBottom?: string;
  width?: string;
};
export const Content = styled.div<ContentProps>`
  ${({ marginBottom, width }) => css`
    margin-bottom: ${marginBottom ?? '4px'};
    position: relative;
    transition: 0.5s;
    width: ${width ?? '100%'};
  `}
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  ${({ width, message, iconLeft, iconRight, height, theme }) => css`
    border: 1px solid ${theme.colors['gray-300']};
    border-radius: 8px;
    font-size: ${theme.sizes['size-14']}rem;
    height: ${height ?? theme.sizes['size-52']}rem;
    outline: none;
    padding: 0.7rem;
    position: relative;
    transition: 0.25s;
    width: ${width ?? '100%'};

    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: not-allowed;
    }
    &:focus:invalid {
      border: 1px solid ${theme.colors.error};
    }
    &:focus:valid {
      border: 1px solid #73dcb1;
    }

    &:focus + #animated-label {
      opacity: 1;
      transform: translateY(-3.9rem);
      transition: ${theme.transition.fast};
    }

    ${!!iconLeft &&
    css`
      padding-left: 2.5rem !important;
    `}

    ${!!iconRight &&
    css`
      padding-right: 2rem !important;
    `}

    ${!!message &&
    css`
      border: 1px solid ${theme.colors.error};
      &:focus:valid {
        border: 1px solid ${theme.colors.error} !important;
      }
    `};
  `}
`;

export type InputLabelProps = {
  marginBottom?: string;
};
export const Label = styled.label<InputLabelProps>`
  ${({ marginBottom, theme }) => css`
    color: #646e7d;
    font-size: ${theme.sizes['size-12'] + 'rem'};
    display: inline-block;
    margin-bottom: ${marginBottom ?? '8px'};
    position: relative;
    transition: 0.5s;
  `};
`;

export type MessageProps = {
  bottom?: string;
  marginTop?: string;
} & Pick<InputProps, 'message'>;

export const Message = styled.span<MessageProps>`
  ${({ theme }) => css`
    bottom: 0;
    color: ${theme.colors.error};
    font-size: ${theme.sizes['size-12']}rem;
    left: 0;
    margin-bottom: -20px;
    position: absolute;
  `}
`;

export const Icon = styled.div<Pick<InputProps, 'iconLeft' | 'iconRight'>>`
  ${({ theme, iconLeft, iconRight }) => css`
    color: ${theme.colors['gray-300']};
    display: flex;
    position: relative;
    width: 2rem;

    & > svg {
      width: 100%;
      &:hover {
        cursor: pointer;
      }
    }

    ${!!iconLeft &&
    css`
      display: block;
      padding-left: 1rem;
      position: absolute;
      top: 11px;
      z-index: 1;
    `}

    ${!!iconRight &&
    css`
      display: block;
      padding-right: 1rem;
      position: absolute;
      right: 0;
      top: 11px;
      z-index: 1;
    `}
  `}
`;

export const AnimatedLabel = styled.label`
  align-self: start;
  background: #fff;
  font-size: 14px;
  margin-left: 8px;
  padding: 0 4px;
  opacity: 0;
  transform: translateY(-2.2rem);
  transform-origin: 0 0;
  transition: all 0.5;
`;
