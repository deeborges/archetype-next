import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: grid;
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/banner_001.png);
    background-size: cover;
    background-position: center center;
    color: ${theme.colors.neutrals.white};
    line-height: 1;

    ${media.lessThan('medium')`
      display: none;
    `}
  `}

  img {
    margin-top: 6rem;
    justify-self: center;
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

    ${media.greaterThan('medium')`
      display: 38rem;
    `}
  `}
`;
export const Footer = styled.p`
  padding: 1.5rem;
  ${media.lessThan('medium')`
      display: none;
    `}
`;

export const ContentFormWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;
