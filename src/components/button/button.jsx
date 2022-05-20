import PropTypes from 'prop-types';

import bem from '../../services/bem';

import './button.css';

const Button = ({
  // icon,
  onClick,
  variant,
  children = 'button',
  type = 'button',
}) => {
  const myClass = bem('button');

  return (
    <button
      className={myClass({ variant: variant })}
      onClick={onClick}
      type={type}
    >
      <div className=''>
        {/* {icon} */}
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    'basic_icon',
    'basic',
    'blocked',
    'secondary',
    'icon',
  ]),
};
export default Button;
