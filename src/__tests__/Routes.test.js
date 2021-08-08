import renderer from 'react-test-renderer';
import Routes from '../Routes';

it('renders pages correctly', () => {
  const router = renderer.create(<Routes />).toJSON();
  expect(router).toMatchSnapshot();
});
