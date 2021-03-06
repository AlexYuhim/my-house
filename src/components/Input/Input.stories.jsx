import React from 'react';

import './Input.css';
import { ReactComponent as Icon } from '../../icons/loupe.svg';

import Input from './Input';

const Tamplate = (args) => <Input {...args} />;

export const InputDefault = Tamplate.bind({});

InputDefault.args = {
  label: 'Введите Ваше имя',
};

export const ImputSearch = Tamplate.bind({});

ImputSearch.args = {
  label: 'Что ищем?',
  prefix: <Icon />,
};

export const ValidationError = Tamplate.bind({});

ValidationError.args = {
  label: 'Введите Ваше имя',
  status: {
    type: 'error',
    message: 'Упс, ошибочка вышла...',
  },
};

export const ValidationWarning = Tamplate.bind({});

ValidationWarning.args = {
  label: 'Введите Ваше имя',
  status: {
    type: 'warning',
    message: 'Предупреждение...',
  },
};

export const EnterInfo = Tamplate.bind({});

EnterInfo.args = {
  label: 'Введите Ваше имя',
};
export default {
  title: 'Input',
  component: Input,
};
