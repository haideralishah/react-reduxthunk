import ActionTypes from '../constants/action_types';

import { handleActions } from 'redux-actions';


export const todoreducer = {
    reducer: handleActions({
        [ActionTypes.AUTHENTICATION]: (state, action) => ({
            ...state,
            authenticated: !state.authenticated,

        }),
        [ActionTypes.ADD_TODOS]: (state, action) => ({
            ...state,
            todos: action.userName
        }),
        [ActionTypes.TOGGLE_EDIT]: (state, action) => ({
            ...state,
            editStatus: !state.editStatus,
            editTodo: action.editTodo
        })

    }, {
            todos: '[]',
            editTodo: {},
            editStatus: false,
            authenticated: false
        })

}