import { combineReducers } from 'redux';
import Test from './reducer_tests';

const rootReducer = combineReducers({
	test: Test
});

export default rootReducer;
