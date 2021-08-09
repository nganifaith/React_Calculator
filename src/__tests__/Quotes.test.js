import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('renders pages correctly', () => {
  const quotes = renderer.create(<Quotes />).toJSON();
  expect(quotes).toMatchSnapshot();
});
