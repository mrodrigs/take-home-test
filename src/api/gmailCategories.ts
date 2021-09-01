import type ContactCategory from 'types/interfaces/ContactCategories';

const gmailCategories: ContactCategory[] = [
  {
    checked: false,
    id: 'gmail-0',
    label: 'Family',
  },
  {
    checked: true,
    id: 'gmail-1',
    label: 'Work Friends',
  },
  {
    checked: false,
    id: 'gmail-2',
    label: 'Another Label',
  },
];

export default gmailCategories;
