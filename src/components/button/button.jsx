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

  return (
    <button
      disabled={disabled}
      className={block({ view })}
      onClick={onClick}
      type={type}
    >
      {hasIcon && <span className={block('icon')}>{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  view: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
