import AxiosWithAuth from './AxiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE ='DELETE_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_START });

    AxiosWithAuth()
    .get('/empty')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
}

export const addData = newObject => dispatch => {
    dispatch({ type: ADD_START });

    AxiosWithAuth()
    .post('/empty', newObject)
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FAILURE, payload: err }))
}

export const updateData = updatedObject => dispatch => {
    dispatch({ type: UPDATE_START });

    AxiosWithAuth()
    .put(`/empty/${updatedObject.id}`, updatedObject)
    .then(res => dispatch({ type: UPDATE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err }))
}

export const deleteData = object => dispatch => {
    dispatch({ type: DELETE_START });

    AxiosWithAuth()
    .delete(`/empty/${object.id}`)
    .then(res => dispatch({ type: DELETE_SUCCESS, payload: object.id }))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }))
}