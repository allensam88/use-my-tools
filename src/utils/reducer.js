import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
    ADD_START, ADD_SUCCESS, ADD_FAILURE,
    UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE,
    DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from './actions';

const initialState = {
    users: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                users: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case ADD_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                users: [...state.users, action.payload]
            }
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAdding: false
            }
        case UPDATE_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                userss: [...state.users.filter(item => { return item.id !== action.payload.id}), action.payload]
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        case DELETE_START:
            return {
                ...state,
                isDeleting: true,
                error: ''
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: '',
                users: state.users.filter(item => { return item.id !== action.payload})
            }
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isDeleting: false
            }
            default:
            return state;
    }
}

export default reducer;