import { render } from '@testing-library/react';
import Home from '../components/Home/Home';

test('renders Home component', () => {
  const homeApp = render(<Home setToken={()=>{}}/>);
  expect(homeApp).toMatchSnapshot();
});
