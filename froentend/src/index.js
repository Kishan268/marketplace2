import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from '../src/store/rootReducer.js';

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
            rootReducer,
            // applyMiddleware(thunk),
            enhancers
        )

ReactDOM.render(
    <Provider store={store}>
	<BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);


