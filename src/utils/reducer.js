import { FETCH_TOOLS_START, FETCH_TOOLS_SUCCESS, FETCH_TOOLS_FAILURE,
    ADD_TOOL_START, ADD_TOOL_SUCCESS, ADD_TOOL_FAILURE,
    UPDATE_TOOL_START, UPDATE_TOOL_SUCCESS, UPDATE_TOOL_FAILURE } from './actions';

const initialState = {
    tools: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
            default:
            return state;
    }
}

export default reducer;