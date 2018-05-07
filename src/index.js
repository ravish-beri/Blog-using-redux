import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware , compose} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';


axios.defaults.baseURL="http://localhost:3001";
axios.defaults.headers.common['Authorization']='AUTH TOKEN';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
 const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

