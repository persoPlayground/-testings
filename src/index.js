import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './components/App';
import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path='/'  component={App} />
        </BrowserRouter>
    </Root>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
