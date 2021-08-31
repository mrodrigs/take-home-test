import styled from 'styled-components';

interface CheckboxWrapperProps {
  isExpanded: boolean;
}

interface ContainerProps {
  isExpanded: boolean;
}

interface DropdownIconProps {
  isExpanded: boolean;
}

interface SelectProps {
  isExpanded: boolean;
}

export const CheckboxWrapper = styled.div<CheckboxWrapperProps>`
  background: #f5f8fa;
  border: 1px solid #cbd6e2;
  border-top: none;
  height: ${({ isExpanded }) => (isExpanded ? '111px' : '0')};
  overflow-y: scroll;
  padding-left: 17px;
  transition: height 0.4s;

  ::-webkit-scrollbar {
    width: 13px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #cbd6e2;
    border: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Container = styled.div<ContainerProps>`
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '33px' : '66px')};
  transition: padding-bottom 0.4s;
  width: 200px;
`;

export const DropdownIcon = styled.img.attrs({
  src: '/assets/icons/dropdownIcon.svg',
})<DropdownIconProps>`
  transform: ${({ isExpanded }) => isExpanded && `rotate(-180deg)`};
  transition: all 0.3s ease-out;
`;

export const Select = styled.div<SelectProps>`
  align-items: center;
  background: #f5f8fa;
  border: 1px solid #cbd6e2;
  border-bottom: none;
  border-radius: ${({ isExpanded }) => (isExpanded ? '2px 2px 0 0' : '2px')};
  box-sizing: border-box;
  color: #33475b;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 44px;
  justify-content: space-between;
  padding: 0 20px 0 17px;
  width: 100%;
`;

export const SelectWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.div`
  padding-left: 17px;
`;
