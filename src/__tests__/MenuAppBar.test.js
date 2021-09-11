import { render } from '@testing-library/react';
import MenuAppBar from '../components/MenuAppBar/MenuAppBar';

test('renders learn react link', () => {
  const MenuAppBarComponent = render(<MenuAppBar />);
  expect(MenuAppBarComponent).toMatchSnapshot();
});