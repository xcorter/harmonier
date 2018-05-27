import {getChoices, getKeys} from '../choices';
import {NEXT_TEST, CHANGE_KEY, CHECK_ANSWER} from "../constants/action_types";

let test = null;

function getTest(key) {
  let tests = getChoices();
  const filtered =  tests.filter(choice => !key || choice.key == key);
  let test = filtered[Math.floor(Math.random() * filtered.length)];
  return test;
}

const initialState = {
  success: null,
  current: null,
  counter: 1,
  successCounter: 0,
  answered: false,
  keys: getKeys(),
  currentKey: null
}

const createNewTest = (state) => {
  test = getTest(state.currentKey);
  return {
    ...state,
    answered: false,
    current: test,
    success: null
  };
}

export default function (state = initialState, action) {
  if (test === null) {
    test = getTest();
  }
  switch (action.type) {
    case CHECK_ANSWER:
      if (!state.answered) {
        state.counter++;
        if (action.success) {
          state.successCounter++;
        }
      }
      state.answered = true;
      state.success = action.success;
      return {
        ...state,
        success: action.success
      };
    case NEXT_TEST:
      return createNewTest(state);
    case CHANGE_KEY:
      state.currentKey = action.payload;
      return createNewTest(state);
  }
  return {
    ...state,
    current: test
  };
}
