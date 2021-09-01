import styled from 'styled-components';

import type CheckboxAppearance from 'types/CheckboxAppearance';

interface CustomCheckboxProps {
  checked: boolean;
}

interface CheckIconProps {
  appearance: CheckboxAppearance;
}

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const CheckIcon = styled.img.attrs<CheckIconProps>(({ appearance }) => ({
  src:
    appearance === 'outline'
      ? 'assets/icons/checkOutlineIcon.svg'
      : 'assets/icons/checkIcon.svg',
}))<CheckIconProps>`
  user-select: none;
`;

export const CustomCheckbox = styled.span<CustomCheckboxProps>`
  align-items: center;
  background: ${({ checked }) => (checked ? '#7C99B6' : 'transparent')};
  border: 1.5px solid #7c99b6;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  height: 14px;
  justify-content: center;
  transition: all 150ms;
  width: 14px;
`;

export const Label = styled.label`
  align-items: center;
  color: #33475b;
  cursor: pointer;
  display: flex;
  height: 32px;

  :hover {
    filter: opacity(70%);
  }
`;

export const Text = styled.div`
  margin-left: 18px;
`;

export const UncheckedIcon = styled.img.attrs({
  src: 'assets/icons/closeIcon.svg',
})`
  height: 16px;
  width: 16px;
`;
