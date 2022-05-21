import React from 'react';

import './button.css';
import { ReactComponent as Icon } from '../../icons/loupe.svg';

import Button from './Button';

const Tamplate = (args) => <Button {...args} />;

export const Primary = Tamplate.bind({});

Primary.args = {
  children: 'Нажми меня',
  view: 'primary',
};

export const Secondary = Tamplate.bind({});

Secondary.args = {
  children: 'Нажми меня',
  view: 'secondary',
};

export const WithIcon = Tamplate.bind({});

WithIcon.args = {
  children: 'Нажми меня',
  icon: <Icon />,
};

export default {
  title: 'Example/Button',
  component: Button,
};
