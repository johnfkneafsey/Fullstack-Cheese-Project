import * as actions from '../actions/cheese';
import store from '../store';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHEESES_REQUEST':
        console.log('fetch cheeses request');
            return Object.assign({}, state, {
                loading: true
            })
            break;

        case 'FETCH_CHEESES_SUCCESS':
        console.log('fetch cheeses success');
            return Object.assign({}, state, {
                loading: false,
                error: null,
                cheeses: action.cheeses
            })
            break;
        
        case 'FETCH_CHEESES_ERROR':
        console.log('fetch cheeses error');
            return Object.assign({}, state, {
                loading: false,
                error: actions.error             
            })
            break;

        default:
        console.log('default option')
            return state;
            break;
    }
}

//hello