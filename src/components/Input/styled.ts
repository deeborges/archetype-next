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

const modifiers = {
  sizes: ({ sizes }: InputProps) => {
    switch (sizes) {
      case 'x_small':
        return css`
          height: 24px;
        `;
      case 'small':
        return css`
          height: 32px;
        `;
      case 'medium':
        return css`
          height: 40px;
        `;
      case 'large':
        return css`
          height: 48px;
        `;
      default:
        null;
    }
  },
  variants: ({ variant }: InputProps) => {
    switch (variant) {
      case 'filled':
        return css`
          background-color: #edf2f7;
          border: 1px solid #edf2f7;

          &:focus {
            background: transparent;
          }
        `;
      case 'flushed':
        return css`
          border: none;
          border-bottom: 1px solid #646e7d;
          border-radius: 0;
          padding-left: 0;
        `;
      case 'outlined':
        return css`
          border: 1px solid #e2e2e2;

          &:focus:invalid {
            border: 1px solid #e62229;
          }

          &:focus:valid {
            border: 1px solid #73dcb1;
          }
        `;
      case 'unstyled':
        return css`
          background: transparent;
          border: 0;
          padding-left: 0;
        `;
      default:
        null;
    }
  }
};

export const Input = styled.input<InputProps>`
  ${({ theme, width }) => css`
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    outline: none;
    padding: 0.7rem;
    transition: 0.25s;
    width: ${width ?? '100%'};

    &:disabled {
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      cursor: not-allowed;
    }

    &:focus:invalid {
      border: 1px solid #e62229;
    }

    &:focus:valid {
      border: 1px solid #73dcb1;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.font.size.large} #e0ffe8 inset;
    }
  `}
`;

export const Label = styled.label<InputLabelProps>`
  color: #646e7d;
  font-size: 12px;
  display: inline-block;

  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom ?? '8px'};
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
