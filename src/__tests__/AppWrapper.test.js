import { render } from '@testing-library/react';
import AppWrapper from '../AppWrapper';
import {createBrowserHistory} from 'history';
import App from '../App';

test('renders learn react link', () => {
  render(<AppWrapper />);
});
test('history to be defined', () => {
  const history = createBrowserHistory();

  render(
    <App history={history} />
  );
  expect(history).toBeDefined();
});