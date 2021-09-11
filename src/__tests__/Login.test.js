import { render } from '@testing-library/react';
import Login from '../components/Login/Login';

test('renders Login component', () => {
  const loginApp = render(<Login setToken={()=>{}}/>);
  expect(loginApp).toMatchSnapshot();
});

