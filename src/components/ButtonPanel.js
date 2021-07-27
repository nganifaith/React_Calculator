import Button from './Button';

const btnRows = {
  row_1: ['AC', '+/-', '%', '/'],
  row_2: ['7', '8', '9', 'X'],
  row_3: ['4', '5', '6', '-'],
  row_4: ['1', '2', '3', '+'],
  row_5: ['0', '.', '='],
};

const ButtonPanel = () => (
  <div>
    <div className="row">
      {btnRows.row_1.map((symbol) => (
        <Button key={symbol} symbol={symbol} />
      ))}
    </div>
    <div className="row">
      {btnRows.row_2.map((symbol) => (
        <Button key={symbol} symbol={symbol} />
      ))}
    </div>
    <div className="row">
      {btnRows.row_3.map((symbol) => (
        <Button key={symbol} symbol={symbol} />
      ))}
    </div>
    <div className="row">
      {btnRows.row_4.map((symbol) => (
        <Button key={symbol} symbol={symbol} />
      ))}
    </div>
    <div className="row">
      {btnRows.row_5.map((symbol) => (
        <Button key={symbol} symbol={symbol} />
      ))}
    </div>
  </div>
);

export default ButtonPanel;
