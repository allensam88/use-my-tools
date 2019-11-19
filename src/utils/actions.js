import AxiosWithAuth from './AxiosWithAuth';

//GET /tools
export const FETCH_TOOLS_START = 'FETCH_START';
export const FETCH_TOOLS_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_TOOLS_FAILURE = 'FETCH_FAILURE';

//POST /tools
export const ADD_TOOL_START = 'ADD_START';
export const ADD_TOOL_SUCCESS = 'ADD_SUCCESS';
export const ADD_TOOL_FAILURE = 'ADD_FAILURE';

//PUT /tools/update/:id
export const UPDATE_TOOL_START = 'UPDATE_START';
export const UPDATE_TOOL_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_TOOL_FAILURE = 'UPDATE_FAILURE';

//DELETE /tools/delete/:id endpoint not built yet
// export const DELETE_TOOL_START = 'DELETE_START';
// export const DELETE_TOOL_SUCCESS = 'DELETE_SUCCESS';
// export const DELETE_TOOL_FAILURE ='DELETE_FAILURE';

//GET /users
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_SUCCESS';

//GET /users/:id
export const FETCH_USERID_START = "FETCH_USERID_START";
export const FETCH_USERID_SUCCESS = 'FETCH_USERID_SUCCESS';
export const FETCH_USERID_FAILURE = 'FETCH_USERID_FAILURE';

//PUT /users/:id
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

//DELETE /users/:id endpoint not built yet



/****** Action Creator Functions ******/
/***TOOL ACTIONS***/
//GET https://use-my-tool.herokuapp.com/tools
export const fetchTools = () => dispatch => {
    dispatch({ type: FETCH_TOOLS_START });

    AxiosWithAuth()
    .get('/tools')
    .then(res => dispatch({ type: FETCH_TOOLS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_TOOLS_FAILURE, payload: err }));
}

//POST https://use-my-tool.herokuapp.com/tools
export const addTool = newTool => dispatch => {
    dispatch({ type: ADD_TOOL_START });

    AxiosWithAuth()
    .post('/tools', newTool)
    .then(res => dispatch({ type: ADD_TOOL_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_TOOL_FAILURE, payload: err }));
}

//PUT https://use-my-tool.herokuapp.com/tools/update/:id
export const updateTool = updatedTool => dispatch => {
    dispatch({ type: UPDATE_TOOL_START });

    AxiosWithAuth()
    .put(`/tools/update/${updatedTool.id}`, updatedTool)
    .then(res => dispatch({ type: UPDATE_TOOL_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_TOOL_FAILURE, payload: err }));
}

//DELETE tool endpoint not built yet.
// export const deleteTool = deletedTool => dispatch => {
//     dispatch({ type: DELETE_TOOL_START });

//     AxiosWithAuth()
//     .delete(`/empty/${deletedTool.id}`)
//     .then(res => dispatch({ type: DELETE_TOOL_SUCCESS, payload: object.id }))
//     .catch(err => dispatch({ type: DELETE_TOOL_FAILURE, payload: err }))
// }

/***USER ACTIONS***/
//GET https://use-my-tool.herokuapp.com/users
export const fetchUsers = () => dispatch => {
    dispatch({ type: FETCH_USERS_START });

    AxiosWithAuth()
    .get('/users')
    .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERS_FAILURE, payload: err }));
}

//GET https://use-my-tool.herokuapp.com/users/:id
export const fetchUserById = id => dispatch => {
    dispatch({ type: FETCH_USERID_START });

    AxiosWithAuth()
    .get(`/users/${id}`)
    .then(res => dispatch({ type: FETCH_USERID_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERID_FAILURE, payload: err }));
}

//PUT https://use-my-tool.herokuapp.com/users/:id
export const updateUser = updatedUser => dispatch => {
    dispatch({ type: UPDATE_USER_START });

    AxiosWithAuth()
    .put(`/users/${updatedUser.id}`, updatedUser)
    .then(res => dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err }));
}

//DELETE user endpoint not built yet