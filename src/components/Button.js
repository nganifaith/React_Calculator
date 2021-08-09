import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  symbol, onClick, color, wide,
}) => (
  <button
    type="button"
    className={`button-wrapper ${wide ? 'wide' : ''}`}
    onClick={onClick}
    style={{ backgroundColor: color }}
  >
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  wide: false,
};

export default Button;
