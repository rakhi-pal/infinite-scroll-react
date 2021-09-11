import App from '../App';
import {createBrowserHistory} from 'history';
import {create, act} from 'react-test-renderer';

test('renders App component', () => {
    let appComponent; 
    act(() => {
      appComponent = create(<App value={1}/>)
    });
    expect(appComponent.toJSON()).toMatchSnapshot();
    act(() => {
      appComponent.update(<App value={2}/>);
    })
    expect(appComponent.toJSON()).toMatchSnapshot();
});

test('history as props', () => {
    const history = createBrowserHistory();
    let appComponent; 
    act(() => {
      appComponent = create(<App history={history}/>)
    });
    expect(appComponent.toJSON()).toMatchSnapshot();
    history.push('/home');
    act(() => {
      appComponent.update(<App history={history}/>);
    })
    expect(appComponent.toJSON()).toMatchSnapshot();
});
