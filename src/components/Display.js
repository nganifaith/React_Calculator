import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ result }) => (
  <div className="input-wrapper">
    <div className="result">
      <h3>{result}</h3>
    </div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

// Set a default prop to a value
Display.defaultProps = {
  result: '0',
};

export default Display;
