import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore,applyMiddleware,compose} from "redux";
import {thunk} from 'redux-thunk';
import reducers from './reducers';
import { create } from '@mui/material/styles/createTransitions';

const store= createStore(reducers, compose(applyMiddleware(thunk)));




ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,document.getElementById('root')

);