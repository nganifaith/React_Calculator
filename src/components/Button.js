import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ symbol }) => (
  <button type="button" className="button-wrapper">
    {symbol}
  </button>
);

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
