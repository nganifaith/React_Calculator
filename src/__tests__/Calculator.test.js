import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders pages correctly', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});
