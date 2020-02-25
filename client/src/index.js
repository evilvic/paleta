import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import MyProvider from './Context'
import * as serviceWorker from './serviceWorker';

const WithContext = () => (
    <BrowserRouter>
        <MyProvider>
            <Router />
        </MyProvider>
    </BrowserRouter>
)

ReactDOM.render(<WithContext />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
