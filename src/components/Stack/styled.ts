import styled from 'styled-components';

export const Content = styled.div`
  & > * {
    margin-top: 0.8rem;

    :first-child {
      margin-top: 0;
    }
  }
`;
