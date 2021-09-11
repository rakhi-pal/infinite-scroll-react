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
  const username = screen.getAllByTestId('username-textbox');
  expect(username[0]).toBeInTheDocument();
});

test('check password textbox is rendered', () => {
  render(<Login setToken={()=>{}}/>);
  const password = screen.getAllByTestId('password');
  expect(password[0]).toBeInTheDocument();
});

test('check login button is rendered', () => {
  render(<Login setToken={()=>{}}/>);
  const loginBtn = screen.getAllByTestId('loginBtn');
  expect(loginBtn[0]).toBeInTheDocument();
});


test('click login button no username and password', () => {
  const history = createBrowserHistory();
  render(<Login setToken={()=>{}} history={history}/>);
  const loginBtn = screen.getAllByTestId('loginBtn');
  
  userEvent.click(loginBtn[0]);
  expect(history.location.pathname).toBe('/');
});

