import { combineReducers } from 'redux';
import { todoreducer } from './all_reducer';

const rootReducer = combineReducers({
    todo: todoreducer.reducer
});

export default rootReducer;