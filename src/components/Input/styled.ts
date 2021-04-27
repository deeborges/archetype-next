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
  position: relative;
  width: 100%;
`;

export const Input = styled.input<InputProps>`
  ${({ width, message, iconLeft, iconRight, height, theme }) => css`
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    font-size: ${theme.font.size.small};
    height: ${height ?? theme.font.size.xl_2_5};
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
      border: 1px solid #e62229;
    }
    &:focus:valid {
      border: 1px solid #73dcb1;
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
      border: 1px solid #e62229;
      &:focus:valid {
        border: 1px solid #e62229 !important;
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
    font-size: ${theme.font.size.small};
    display: inline-block;
    margin-bottom: ${marginBottom ?? '8px'};
    position: relative;
    transition: 0.5s;
  `};
`;

export type MessageProps = {
  bottom?: string;
  marginTop?: string;
};

export const Message = styled.span<MessageProps>`
  ${() => css`
    bottom: 0;
    color: #e62229;
    font-size: 12px;
    left: 0;
    margin-bottom: -20px;
    position: absolute;
  `}
`;

export const Icon = styled.div<Pick<InputProps, 'iconLeft' | 'iconRight'>>`
  ${({ theme, iconLeft, iconRight }) => css`
    color: ${theme.colors.allColors.gray300};
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
