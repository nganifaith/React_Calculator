import Button from './Button';

const btnRows = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
  <div>
    {btnRows.map((row) => (
      <div key={row[0]} className="row">
        {row.map((symbol) => (
          <Button key={symbol} symbol={symbol} />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
