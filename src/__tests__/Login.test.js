import { render, screen } from '@testing-library/react';
import Login from '../components/Login/Login';
import userEvent from "@testing-library/user-event";

import {createBrowserHistory} from 'history';

test('renders Login component', () => {
  const loginApp = render(<Login setToken={()=>{}}/>);
  expect(loginApp).toMatchSnapshot();
});

test('check username textbox is rendered', () => {
  render(<Login setToken={()=>{}}/>);
  const username = screen.getByTestId('username-textbox');
  expect(username).toBeInTheDocument();
});

test('check password textbox is rendered', () => {
  render(<Login setToken={()=>{}}/>);
  const password = screen.getByTestId('password');
  expect(password).toBeInTheDocument();
});

test('check login button is rendered', () => {
  render(<Login setToken={()=>{}}/>);
  const loginBtn = screen.getByTestId('loginBtn');
  expect(loginBtn).toBeInTheDocument();
});


test('click login button no username and password', () => {
  const history = createBrowserHistory();
  render(<Login setToken={()=>{}} history={history}/>);
  const loginBtn = screen.getByTestId('loginBtn');
  
  userEvent.click(loginBtn);
  expect(history.location.pathname).toBe('/');
});

