import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #141414;
  height: 100%;
  width: 100%;
`;

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  width: inherit;
`;

export const Logo = styled.img`
  align-self: baseline;
  padding: 2rem;
  height: 72px;
  width: 72px;
`;

export const Eu = styled.img`
  width: min(20rem, 100%);
`;
