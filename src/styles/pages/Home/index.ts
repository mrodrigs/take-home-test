import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 164px;
  width: 100%;

  @media (max-width: 800px) {
    align-items: center;
    padding: 44px;
    flex-direction: column;
  }
`;
