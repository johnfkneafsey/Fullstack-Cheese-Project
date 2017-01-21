import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../js/reducers/cheese';

export default createStore(reducers.reducer, applyMiddleware(thunk));