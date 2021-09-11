import { render, cleanup } from '@testing-library/react';
import AppWrapper from '../AppWrapper';

afterEach(cleanup);
test('renders App Wrapper component and tests snapshots', () => {
  const AppWrapperComponent = render(<AppWrapper />);
  expect(AppWrapperComponent).toMatchSnapshot();
});