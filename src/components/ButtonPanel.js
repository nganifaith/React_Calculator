import PropTypes from 'prop-types';
import Button from './Button';

const btnRows = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = ({ handleClick }) => (
  <div>
    {btnRows.map((row) => (
      <div key={row[0]} className="row">
        {row.map((symbol, idx) => (
          <Button
            key={symbol}
            symbol={symbol}
            onClick={() => handleClick(symbol)}
            color={idx === row.length - 1 ? '#f5923e' : undefined}
            wide={symbol === '0'}
          />
        ))}
      </div>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
