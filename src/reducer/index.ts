import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
    authReducer,
    userReducer
})

export default reducers;