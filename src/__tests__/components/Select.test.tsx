import { fireEvent, render } from '@testing-library/react';

import Select from 'components/Select';
import serviceCategories from '__mocks__/serviceCategories';

describe('Checkbox', () => {
  it('should be able to be check all contacts at once', () => {
    const { getAllByRole, getByTestId } = render(
      <Select contactCategories={serviceCategories} />,
    );

    fireEvent.click(getByTestId('select-all-checkbox'));

    expect(getAllByRole('checkbox')).toBeTruthy();
  });

  it('should be able to check all contacts at each time', () => {
    const { getAllByRole, getByTestId } = render(
      <Select contactCategories={serviceCategories} />,
    );

    fireEvent.click(getByTestId('mock-2'));

    expect(getAllByRole('checkbox')).toBeTruthy();
  });
});
