import React from 'react';

import MySelect from './Select';

import './Select.css';

const Tamplate = (args) => <MySelect {...args} />;

export const MultiSelect = Tamplate.bind({});

MultiSelect.args = {
  closeMenuOnSelect: false,
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
  ],
  isMulti: true,
};

export const OneSelect = Tamplate.bind({});

OneSelect.args = {
  closeMenuOnSelect: true,
  isMulti: false,
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest' },
    { value: 'slate', label: 'Slate' },
    { value: 'silver', label: 'Silver' },
  ],
};

export default {
  title: 'Select',
  component: MySelect,
};
