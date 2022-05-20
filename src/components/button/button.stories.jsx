import React from 'react';

import './button.css';
// import lup from '../../img/svg/';

import Button from './button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Tamplate = (args) => <Button {...args} />;

export const Basic = Tamplate.bind({});

Basic.args = {
  children: 'Подписаться',
  variant: 'basic',
};

export const Blocked = Tamplate.bind({});

Blocked.args = {
  children: 'Подписаться',
  variant: 'blocked',
};
export const Secondary = Tamplate.bind({});

Secondary.args = {
  children: 'Подписаться',
  variant: 'secondary',
};

export const BasicIcon = Tamplate.bind({});

BasicIcon.args = {
  children: ' Подобрать',
  variant: 'basic_icon',
};
export const Icon = Tamplate.bind({});

Icon.args = {
  children: 'Подобрать',
  variant: 'icon',
};
