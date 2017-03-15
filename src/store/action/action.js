import ActionTypes from '../constants/action_types';


export function getInvite(userName) {
    return dispatch => {
        console.log('abcdefghi--------------');
        setTimeout(() => {
            dispatch(action.addTodos(userName));
        }, 3000);

    }
}

export const action = {

    authentication: () => ({
        type: ActionTypes.AUTHENTICATION,
    }),
    addTodos: (userName) => ({
        type: ActionTypes.ADD_TODOS,
        userName
    }),
    toggleEdit: (editTodo) => ({
        type: ActionTypes.TOGGLE_EDIT,
        editTodo
    })
}