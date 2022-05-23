import React from 'react';

import './Input.css';
import { ReactComponent as Icon } from '../../icons/loupe.svg';

import Input from './Input';

const Tamplate = (args) => <Input {...args} />;

export const InputDefault = Tamplate.bind({});

InputDefault.args = {
  placeHolder: 'Имя',
};

export const ImputSearch = Tamplate.bind({});

ImputSearch.args = {
  placeHolder: 'Поиск',
  prefix: <Icon />,
};

export const ValidationError = Tamplate.bind({});

ValidationError.args = {
  placeHolder: 'Введенная информация',
  status: 'error',
};

export const ValidationWarning = Tamplate.bind({});

ValidationWarning.args = {
  placeHolder: 'Введенная информация',
  status: 'warning',
  statusMessage: 'Текст-предупреждение',
};

export const EnterInfo = Tamplate.bind({});

EnterInfo.args = {
  placeHolder: 'Введенная информация',
};
export default {
  title: 'Example/Input',
  component: Input,
};
