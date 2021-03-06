import { ChangeEventHandler, MouseEvent } from 'react';

import {
  CheckboxInput,
  CheckIcon,
  CustomCheckbox,
  Label,
  Text,
  UncheckedIcon,
} from 'styles/components/Checkbox';
import type CheckboxAppearance from 'types/CheckboxAppearance';

interface CheckboxProps {
  appearance?: CheckboxAppearance;
  checked?: boolean;
  id?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  appearance = 'default',
  checked,
  id,
  label,
  onChange,
}) => {
  const preventClickPropagation = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const getAppearance = () => {
    switch (appearance) {
      case 'outline':
        return checked ? (
          <CheckIcon appearance={appearance} />
        ) : (
          <UncheckedIcon />
        );
      default:
        return (
          <CustomCheckbox checked={checked || false}>
            <CheckIcon appearance={appearance} />
          </CustomCheckbox>
        );
    }
  };

  return (
    <Label htmlFor={id}>
      <CheckboxInput
        checked={checked}
        data-testid={id}
        id={id}
        onChange={onChange}
        onClick={preventClickPropagation}
      />
      {getAppearance()}
      {label && <Text>{label}</Text>}
    </Label>
  );
};

export default Checkbox;
