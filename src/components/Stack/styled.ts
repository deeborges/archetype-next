import styled, { css } from 'styled-components';

import { StackProps } from '.';

export const Content = styled.div<StackProps>`
  & > * {
    ${({ margin, marginBottom, marginLeft, marginTop, marginRight }) => css`
      ${!margin && `margin: ${margin}`}
      ${!marginBottom && `margin-bottom: ${marginBottom}`}
      ${!marginLeft && `margin-left: ${marginLeft}`}
      ${!marginTop && `margin-top: ${marginTop}`}
      ${!marginRight && `margin-right: ${marginRight}`}
    `}

    :first-child {
      margin-top: 0;
    }
  }
`;
