import React from 'react';
import PropTypes from 'prop-types';

// import { ReactComponent as Icon } from '../../icons/loupe.svg';
import bem from '../../services/bem';

const block = bem('input');

const Input = ({
  value,
  onChange,
  placeHolder = 'Имя',
  status,
  statusMessage = 'Текст ошибки',
  prefix,
  disabled,
  type = 'text',
}) => {
  const hasPrefix = Boolean(prefix);

  return (
    <div className={block()}>
      <fieldset disabled={disabled} className={block('fiedsetgrup')}>
        {/* { && <legend>Имя</legend>} */}
        {hasPrefix && <span>{prefix}</span>}
        <input
          onChange={onChange}
          placeholder={placeHolder}
          value={value}
          type={type}
        />
      </fieldset>
      {status &&
        (status === 'error' ? (
          <span className={block('error')}>{statusMessage}</span>
        ) : (
          <span className={block('warning')}>{statusMessage}</span>
        ))}
    </div>
  );
};

Input.propTypes = {
  /** тип поля инпута */
  type: PropTypes.string,
  /** Текущее значение  */
  value: PropTypes.string,
  /** Функция-обработчик ввода */
  onChange: PropTypes.func,
  /** Текст-подсказка к вводу */
  placeHolder: PropTypes.string,
  /** Статус валидации */
  status: PropTypes.oneOf(['error', 'warning']),
  /** Сообщение валидации */
  statusMessage: PropTypes.string,
  /** Икоонка перед текстом в инпуте */
  prefix: PropTypes.node,
  /** Статус disabled */
  disabled: PropTypes.bool,
};
export default Input;
