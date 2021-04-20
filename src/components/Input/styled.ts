import styled from 'styled-components';

export const Content = styled.div`
  margin: ${(props) => props.margin ?? null};
  width: ${(props) => props.width ?? '100%'};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: ${(props) =>
    `1px solid ${props.borderColor ? props.borderColor : '#dfe2e5'}`};
  border-radius: ${(props) => props.borderRadius ?? '4px'};
  color: #2d3338;
  font-family: 'PublicSans-Normal', sans-serif;
  font-size: ${(props) => props.fontSize ?? '14px'};
  height: ${(props) => props.height ?? '48px'};
  margin-bottom: 4px;
  padding: 1rem;
  transition: 0.5s;
  width: ${(props) => props.width ?? '100%'};
  &:disabled {
  }

  &:active {
  }
`;

export const Label = styled.label`
  display: flex;
  font-family: 'PublicSans-Normal', sans-serif;
  font-size: 14px;
  margin-bottom: 8px;
  position: relative;
  transition: 0.5s;
  width: fit-content;
`;

export const BottomMessage = styled.span`
  bottom: -1rem;
  color: #e62229;
  font-family: 'PublicSans-Regular';
  font-size: 14px;
  left: 0;
  position: absolute;
`;
