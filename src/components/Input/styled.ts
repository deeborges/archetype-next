import styled, { css } from 'styled-components';
import { InputProps } from '.';

export type ContentProps = {
  marginBottom?: string;
  width?: string;
};

export type InputLabelProps = {
  marginBottom?: string;
};

export type MessageProps = {
  bottom?: string;
  marginTop?: string;
};

export const Content = styled.div<ContentProps>`
  ${({ marginBottom, width }) => css`
    margin-bottom: ${marginBottom ?? '4px'};
    width: ${width ?? '100%'};
  `}
  position: relative;
  transition: 0.5s;
`;

export const Input = styled.input<InputProps>`
  ${({ width, variant }) => css`
    ${() => {
      switch (variant) {
        case 'actived':
          return css``;
        default:
          return css`
            border: 1px solid #646e7d;
            border-radius: 4px;
            padding: 0.5rem;
            height: 42px;
          `;
      }
    }}
    outline: none;
    transition: 0.25s;
    width: ${width ?? '100%'};

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }

    &:focus:invalid {
      border: 1px solid #fb0000;
    }

    &:focus:valid {
      border: 1px solid #73dcb1;
    }
  `}
`;

export const Label = styled.label<InputLabelProps>`
  color: #646e7d;
  font-size: 12px;
  display: inline-block;

  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom ?? '4px'};
    transition: 0.5s;
    width: inherit;
  `};
`;

export const Message = styled.span<MessageProps>`
  ${({ bottom, marginTop }) => css`
    bottom: ${bottom ?? '-1rem'};
    color: #e62229;
    font-family: 'PublicSans-Regular';
    font-size: 14px;
    left: 0;
    margin-top: ${marginTop ?? '0.25rem'};
    position: absolute;
  `}
`;
