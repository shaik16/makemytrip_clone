import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import signUpReducer from './reducers/signUpReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer,
});

export default rootReducer;
