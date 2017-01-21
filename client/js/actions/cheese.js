import fetch from 'isomorphic-fetch';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
})


export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses: cheeses
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
    type: FETCH_CHEESES_ERROR,
    error: error
})


export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest())
    const url = 'http://localhost:8080';
    return fetch(url).then(response => {
        if (!response.ok) {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(error => dispatch(fetchCheesesError(error)))
};

//please work

