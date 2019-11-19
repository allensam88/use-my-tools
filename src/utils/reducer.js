import { FETCH_TOOLS_START, FETCH_TOOLS_SUCCESS, FETCH_TOOLS_FAILURE,
    ADD_TOOL_START, ADD_TOOL_SUCCESS, ADD_TOOL_FAILURE,
    UPDATE_TOOL_START, UPDATE_TOOL_SUCCESS, UPDATE_TOOL_FAILURE,
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    FETCH_USERID_START, FETCH_USERID_SUCCESS, FETCH_USERID_FAILURE,
    UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from './actions';

const initialState = {
    tools: [],
    users: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        //GET - fetch tools
        case FETCH_TOOLS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_TOOLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                tools: action.payload
            }
        case FETCH_TOOLS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        //POST - add tool
        case ADD_TOOL_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_TOOL_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                users: [...state.tools, action.payload]
            }
        case ADD_TOOL_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAdding: false
            }
        //PUT - update tool
        case UPDATE_TOOL_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case UPDATE_TOOL_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                userss: [...state.tools.filter(item => { return item.id !== action.payload.id}), action.payload]
            }
        case UPDATE_TOOL_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        // case DELETE_TOOL_START:
        //     return {
        //         ...state,
        //         isDeleting: true,
        //         error: ''
        //     }
        // case DELETE_TOOL_SUCCESS:
        //     return {
        //         ...state,
        //         isDeleting: false,
        //         error: '',
        //         users: state.tools.filter(item => { return item.id !== action.payload})
        //     }
        // case DELETE_TOOL_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         isDeleting: false
        //     }
        //GET - fetch all users
        case FETCH_USERS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        //GET - fetch a single user by id
        case FETCH_USERID_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_USERID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERID_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        //PUT - update a single user by id
        case UPDATE_USER_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                user: [...state.user.filter(item => { return item.id !== action.payload.id}), action.payload]
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        default:
            return state;
    }
}

export default reducer;