import React from 'react';
import PropTypes from 'prop-types';

import bem from '../../services/bem';

const block = bem('input');

const Input = ({ value, onChange, status, prefix, disabled, type, label }) => {
  const hasPrefix = Boolean(prefix);

  return (
    <label className={block()}>
      {hasPrefix && <span className={block('prefix')}>{prefix}</span>}
      <input
        disabled={disabled}
        className={block('inputField')}
        onChange={onChange}
        value={value}
        placeholder=' '
        type={type}
      />
      <div className={block('label')}>{label}</div>
      {status && <span className={block(status.type)}>{status.message}</span>}
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  /** Идентификатор inout */
  id: PropTypes.string,
  /** Тип поля инпута */
  type: PropTypes.oneOf(['text', 'password']),
  /** Текущее значение  */
  value: PropTypes.string,
  /** Функция-обработчик ввода */
  onChange: PropTypes.func,
  /** Статус валидации */
  status: PropTypes.objectOf(PropTypes.string),
  /** Иконка перед текстом в инпуте */
  prefix: PropTypes.node,
  /** Статус disabled */
  disabled: PropTypes.bool,
};
export default Input;
