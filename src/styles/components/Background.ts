import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: -1;

  @media (max-width: 800px) {
    height: 100%;
    align-items: center;
  }
`;

export const Image = styled.img`
  margin-top: 88px;
`;
