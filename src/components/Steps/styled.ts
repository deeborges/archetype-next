import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 20rem;
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    gap: ${theme.font.size.xxsmall};
    position: relative;
    width: 100%;

    & > div {
      border-radius: 12px;
      background-color: ${theme.colors.allColors.noverde};
      height: 4px;
      width: 7rem;
    }
  `}
`;

export const BoxHover = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    gap: ${theme.font.size.xxsmall};
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;

    & > div {
      border-radius: 12px;
      background-color: ${theme.colors.allColors.gray500};
      height: 4px;
      width: 7rem;
    }
  `}
`;
