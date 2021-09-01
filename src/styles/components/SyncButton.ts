import styled from 'styled-components';

interface ButtonProps {
  isSynced: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 9px;
  transform: ${({ isSynced }) => isSynced && `rotate(-180deg)`};
  transition: all 0.3s ease-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 110px 28px;

  @media (max-width: 800px) {
    margin: 28px 0 14px 0;
  }
`;

export const SyncIcon = styled.img.attrs({
  alt: 'Sync button',
  src: '/assets/images/syncButton.svg',
})`
  height: 133px;
  width: 133px;
`;
