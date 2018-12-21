import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import '@lib'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from '@/serviceWorker';
import MainContainer from '@pages/main/MainContainer'
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path = '/' component = {MainContainer} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
