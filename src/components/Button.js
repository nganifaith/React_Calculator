import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ symbol, onClick }) => (
  <button type="button" className="button-wrapper" onClick={onClick}>
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
