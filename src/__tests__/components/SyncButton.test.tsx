import { fireEvent, render } from '@testing-library/react';

import SyncButton from 'components/SyncButton';

describe('SyncButton', () => {
  it('should be able to render with initial state', () => {
    const { getByText } = render(<SyncButton />);

    expect(getByText('Sync Contacts')).toBeTruthy();
  });

  it('should be able to toggle to synced state', () => {
    const { getByTestId, getByText } = render(<SyncButton />);

    fireEvent.click(getByTestId('sync-button'));

    expect(getByText('All done!')).toBeTruthy();
  });

  it('should be able to toggle back to not synced state', () => {
    const { getByTestId, getByText } = render(<SyncButton />);

    fireEvent.click(getByTestId('sync-button'));

    fireEvent.click(getByTestId('sync-button'));

    expect(getByText('Sync Contacts')).toBeTruthy();
  });
});
