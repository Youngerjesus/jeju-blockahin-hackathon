// import {history} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers';

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const routingMiddleware = routerMiddleware(useHistory());

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
