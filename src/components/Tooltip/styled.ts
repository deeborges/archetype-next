import styled from 'styled-components';

export const Content = styled.a`
  position: relative;

  &:hover::after {
    opacity: 1;
    pointer-events: all;
  }

  &::after {
    background: #212121;
    border-radius: 4px;
    color: #c3c3c3;
    content: attr(aria-label);
    height: 24px;
    font-size: 1rem;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: 0.7s;
    white-space: nowrap;
  }
`;
