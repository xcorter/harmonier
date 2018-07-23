import { combineReducers } from 'redux';
import Test from './reducer_tests';
import Trainer from './reducer_trainer';

const rootReducer = combineReducers({
	test: Test,
	trainer: Trainer
});

export default rootReducer;
