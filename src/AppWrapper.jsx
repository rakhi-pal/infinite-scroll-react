import App from './App';
import {createBrowserHistory} from 'history';

const AppWrapper = () => {
    const history = createBrowserHistory({forceRefresh:true});
    return (
        <App history={history} />
    )
}
export default AppWrapper;