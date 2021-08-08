import Calculate from '../Logic/calculate';

test('should clear the display', () => {
  const buttonName = 'AC';
  const data = { total: '5', operation: '+', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe(null);
});

test('should calculate the sum', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '+', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('10');
});

test('should calculate the difference', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '-', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('0');
});

test('should calculate the multiple ', () => {
  const buttonName = '=';
  const data = { total: '5', operation: 'X', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('25');
});

test('should calculate the division', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '/', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('1');
});
