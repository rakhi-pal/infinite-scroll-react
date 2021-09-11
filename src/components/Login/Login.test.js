import { render } from '@testing-library/react';
import Login from './Login';

test('renders Login component', () => {
  const loginApp = render(<Login setToken={()=>{}}/>);
  expect(loginApp).toMatchSnapshot();
});

