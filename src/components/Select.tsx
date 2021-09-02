import { useEffect, useState } from 'react';

import Checkbox from 'components/Checkbox';
import {
  CheckboxWrapper,
  Container,
  DropdownIcon,
  Select,
  SelectWrapper,
  Text,
} from 'styles/components/Select';
import type ContactCategory from 'types/interfaces/ContactCategories';

interface SelectInputProps {
  contactCategories: ContactCategory[];
}

const SelectInput: React.FC<SelectInputProps> = ({ contactCategories }) => {
  const [currentCategories, setCurrentCategories] =
    useState<ContactCategory[]>(contactCategories);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleCheckCategory = (index: number) => {
    const newCurrentCategories = [...currentCategories];

    newCurrentCategories[index].checked = !newCurrentCategories[index].checked;

    setCurrentCategories(newCurrentCategories);
  };

  const toggleSelectAllCategories = () => {
    const currentStatus = isAllSelected;

    const newCurrentCategories = currentCategories.map(category => {
      return { ...category, checked: !currentStatus };
    });

    setCurrentCategories(newCurrentCategories);

    setIsAllSelected(!currentStatus);
  };

  const toggleShowCheckboxes = () => {
    setIsExpanded(currentStatus => !currentStatus);
  };

  useEffect(() => {
    const hasUncheckedCategory = currentCategories?.find(
      category => category.checked === false,
    );

    setIsAllSelected(!hasUncheckedCategory);
  }, [currentCategories]);

  return (
    <Container isExpanded={isExpanded}>
      <Select isExpanded={isExpanded} onClick={toggleShowCheckboxes}>
        <SelectWrapper>
          <Checkbox
            appearance="outline"
            checked={isAllSelected}
            id="select-all-checkbox"
            onChange={toggleSelectAllCategories}
          />
          <Text>All contacts</Text>
        </SelectWrapper>
        <DropdownIcon isExpanded={isExpanded} />
      </Select>
      <CheckboxWrapper isExpanded={isExpanded}>
        {currentCategories.map((category, index) => (
          <Checkbox
            appearance="default"
            checked={category.checked}
            id={category.id}
            key={category.id}
            label={category.label}
            onChange={() => handleCheckCategory(index)}
          />
        ))}
      </CheckboxWrapper>
    </Container>
  );
};

export default SelectInput;
