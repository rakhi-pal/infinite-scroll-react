import { render, screen } from '@testing-library/react';
import MenuAppBar from '../components/MenuAppBar/MenuAppBar';

test('renders learn react link', () => {
  const MenuAppBarComponent = render(<MenuAppBar />);
  expect(MenuAppBarComponent).toMatchSnapshot();
});

test('check app bar is rendered', () => {
  render(<MenuAppBar/>);
  const appbar = screen.getByTestId('appbar');
  expect(appbar).toBeInTheDocument();
});

test('contact have been displayed properly', () => {
  render(<MenuAppBar/>);
  const contacts = screen.getByText('Contacts');
  expect(contacts).toBeInTheDocument();
});