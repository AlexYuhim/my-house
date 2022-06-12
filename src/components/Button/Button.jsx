import PropTypes from 'prop-types';

import bem from '../../services/bem';

import './Button.css';

const block = bem('button');
const Button = ({
  disabled,
  icon,
  view = 'secondary',
  onClick,
  children,
  type = 'button',
}) => {
  const hasIcon = Boolean(icon);
  const hasLabel = Boolean(children);

  return (
    <button
      disabled={disabled}
      className={block({ view })}
      onClick={onClick}
      type={type}
    >
      {hasIcon && <span className={block('icon')}>{icon}</span>}

      {hasLabel && <span className={block('label')}>{children}</span>}
    </button>
  );
};

Button.propTypes = {
  /** Иконка  */
  icon: PropTypes.node,
  /** Вид отображаения */
  view: PropTypes.oneOf(['primary', 'secondary']),
  /** передаваемое значение  */
  children: PropTypes.string,
  /** Функция-обработчик клика */
  onClick: PropTypes.func,
  /** Тип кнопки */
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']),
  /** Статус disable */
  disabled: PropTypes.bool,
};
export default Button;
