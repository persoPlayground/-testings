import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers';
const store = createStore(rootReducer, applyMiddleware(reduxPromise));
store.subscribe(() => console.log(store.getState()))
export default props => (
    <Provider store={store}>
        { props.children }
    </Provider>
);