import { fireEvent, render } from '@testing-library/react';

import Checkbox from 'components/Checkbox';

describe('Checkbox', () => {
  it('should be able to be checked', () => {
    const { getByTestId } = render(<Checkbox id="mock-checkbox" />);

    fireEvent.click(getByTestId('mock-checkbox'));

    expect(getByTestId('mock-checkbox')).toBeTruthy();
  });

  it('should be able to be unchecked back', () => {
    const { getByTestId } = render(<Checkbox id="mock-checkbox" />);

    fireEvent.click(getByTestId('mock-checkbox'));
    fireEvent.click(getByTestId('mock-checkbox'));

    expect(getByTestId('mock-checkbox')).toBeTruthy();
  });
});
