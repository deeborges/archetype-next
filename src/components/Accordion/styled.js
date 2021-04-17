import styled from 'styled-components';

export const Content = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid purple;
  background-color: #fff;
  transition: 0.3s all ease-in;
  padding: ${(props) => (props.open ? '25px 0' : '0')};
  transition: all 0.3s ease-out;

  ${(props) => (props.open ? 'margin: 0 0 1rem 0' : null)}
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:h3 {
    margin: 0;
  }

  & svg {
    width: 24px;
  }
`;

export const Body = styled.div`
  padding: 0 1rem 1rem 1rem;
`;
