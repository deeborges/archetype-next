import styled, { css, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  ${({ theme }) => css`
    animation: ${rotate360} 1s linear infinite;
    border-top: 2px solid ${theme.colors.neutrals.white};
    border-right: 2px solid ${theme.colors.neutrals.white};
    border-bottom: 2px solid ${theme.colors.neutrals.white};
    border-left: 4px solid ${theme.colors.allColors.noverde};
    border-radius: 50%;
    background: transparent;
    height: 24px;
    margin-right: 12px;
    transform: translateZ(0);
    width: 24px;
  `}
`;

export default Spinner;
