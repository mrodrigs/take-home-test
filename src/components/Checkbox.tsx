import { ChangeEventHandler, MouseEvent } from 'react';

import {
  CheckboxInput,
  CheckIcon,
  CustomCheckbox,
  Label,
  Text,
  UncheckedIcon,
} from 'styles/components/Checkbox';
import CheckboxAppearance from 'types/CheckboxAppearance';

interface CheckboxProps {
  appearance: CheckboxAppearance;
  checked?: boolean;
  id?: string;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  appearance = 'default',
  checked = false,
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
          <CustomCheckbox checked={checked}>
            <CheckIcon appearance={appearance} />
          </CustomCheckbox>
        );
    }
  };

  return (
    <Label htmlFor={id}>
      <CheckboxInput
        checked={checked}
        id={id}
        onChange={onChange}
        onClick={event => preventClickPropagation(event)}
      />
      {getAppearance()}
      {label && <Text>{label}</Text>}
    </Label>
  );
};

export default Checkbox;
