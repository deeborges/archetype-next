import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.allColors.gray100};
    display: grid;
    height: 100vh;
    justify-content: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutrals.white};
    border-radius: 12px;
    box-shadow: 0px 2px 5px rgba(170, 171, 182, 0.5);
    align-items: center;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 2.25rem 4.75rem;
    width: 30rem;

    & > p {
      word-wrap: break-word;
    }
  `}
`;
