import PropTypes from 'prop-types';

const Button = ({ onClick, children = 'Click my' }) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};
export default Button;
