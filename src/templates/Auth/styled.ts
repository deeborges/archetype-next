import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
`;
export const Banner = styled.div`
  align-content: center;
  justify-content: center;
  display: grid;
  ${({ theme }) => css`
    background-image: url(/img/banner_001.png);
    background-size: cover;
    background-position: center center;
    color: ${theme.colors.neutrals.white};
    line-height: 1;
  `}

  img {
    align-self: flex-end;
  }
`;
export const Subtitle = styled.h3``;

export const ContentForm = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutrals.white};
    display: grid;
    align-items: center;
    justify-content: center;
    width: 30rem;
  `}
`;
export const Footer = styled.p`
  padding: 1.5rem;
`;

export const ContentFormWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;
