import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import searchReducer from './reducers/searchReducer';
import signUpReducer from './reducers/signUpReducer';

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer,
	search: searchReducer,
});

export default rootReducer;
