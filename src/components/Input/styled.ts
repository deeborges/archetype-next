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
  /* border: ${(props) =>
    `1px solid ${props.borderColor ? props.borderColor : '#dfe2e5'}`};
  border-radius: ${(props) => props.borderRadius ?? '4px'};
  color: #2d3338;
  font-family: 'PublicSans-Normal', sans-serif;
  font-size: ${(props) => props.fontSize ?? '14px'};
  height: ${(props) => props.height ?? '48px'};
  margin-bottom: 4px;
  padding: 1rem;
*/
  ${({ width, variant }) => css`
    padding: 0.5rem;
    transition: 0.5s;
    width: ${width ?? '100%'};

    &:focus {
      border: 2px solid blue;
    }

    &:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }

    &:active {
      border: 1px solid #5ebd66;
    }
  `}
`;

export const Label = styled.label<InputLabelProps>`
  /* font-family: ; */
  /* font-size: 14px; */
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
