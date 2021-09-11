import { render } from '@testing-library/react';
import AppWrapper from '../AppWrapper';

test('renders learn react link', () => {
  const AppWrapperComponent = render(<AppWrapper />);
  expect(AppWrapperComponent).toMatchSnapshot();
});