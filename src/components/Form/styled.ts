import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? 'column'};
  height: ${(props) => props.height ?? '80vh'};
  padding: 0 8px;
  position: relative;
  margin-top: ${(props) => props.height ?? '24px'};
  margin-bottom: ${(props) => props.height ?? '24px'};

  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-moz-scrollbar {
    width: 10px;
  }
  ::-moz-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }
  ::-moz-scrollbar-track {
    background-color: transparent;
  }
`;

export const FormRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: ${(props) => props.wrap ?? props.wrap};
  justify-content: center;
  gap: 24px;
  margin-bottom: ${(props) => props.marginBottom ?? '1rem'};
  width: 100%;
`;
