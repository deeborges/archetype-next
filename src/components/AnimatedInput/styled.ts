import styled from 'styled-components';

export const Wrapper = styled.main``;

export const Container = styled.section`
  & > label {
    display: block;
    font-size: 14px;
    opacity: 1;
    transform: translateY(-2.2rem);
    transform-origin: 0 0;
    transition: all 0.3;
  }

  & + label {
    transform: translateY(-4.4rem);
  }
`;
