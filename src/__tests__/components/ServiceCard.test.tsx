import { render } from '@testing-library/react';

import ServiceCard from 'components/ServiceCard';
import serviceCategories from '__mocks__/serviceCategories';

describe('Service Card', () => {
  it('should be able to render the select with contact categories', () => {
    const { getByText } = render(
      <ServiceCard
        contactCategories={serviceCategories}
        image="Service image"
        imageAlt="Service image alt"
        text="Service text"
        title="Service title"
      />,
    );

    expect(getByText('Service text')).toBeTruthy();
    expect(getByText('Service title')).toBeTruthy();
  });
});
