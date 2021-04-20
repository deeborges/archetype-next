import styled, { css } from 'styled-components';
import { InputProps } from '.';

export type ContentProps = {
  marginBottom?: string;
  width?: string;
};

export const Content = styled.div<ContentProps>`
  ${({ marginBottom, width }) => css`
    margin-bottom: ${marginBottom ?? '4px'};
    width: ${width ?? '100%'};
  `}
  position: relative;
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

  width: ${(props) => props.width ?? '100%'}; */
  ${({ width }) => css`
    transition: 0.5s;
    width: ${width ?? '100%'};
  `}

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &:active {
  }
`;

export type InputLabelProps = {
  marginBottom?: string;
};
export const Label = styled.label<InputLabelProps>`
  /* display: flex;
  font-family: 'PublicSans-Normal', sans-serif;
  font-size: 14px;
  margin-bottom: 8px;
  position: relative;
  width: fit-content; */
  display: inline-block;
  transition: 0.5s;
  width: inherit;
  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom ?? '4px'};
  `};
`;

export type MessageProps = {
  bottom?: string;
  marginTop?: string;
};
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
