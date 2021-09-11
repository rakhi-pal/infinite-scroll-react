import { render } from '@testing-library/react';
import App from '../App';

import {createBrowserHistory} from 'history';

test('renders App component', () => {
  render(<App />);
});

test('history as props', () => {
  const history = createBrowserHistory();
  history.push('/home');
  render(<App history={history}/>);
  expect(history.location.pathname).toBe('/home');
});
