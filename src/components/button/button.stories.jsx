import React from 'react';

import Button from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'Click' },
  },
};

export const Tamplate = (args) => <Button {...args} />;
