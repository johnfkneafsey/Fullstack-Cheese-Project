//if (!global._babelPolyfill) {
//  require('babel-core/polyfill')
//}

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import CheeseList from './components/cheese-list';


// for testing
const cheeseArray = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={store}>
            <CheeseList />
        </Provider>,
        document.getElementById('app')
    )
});


