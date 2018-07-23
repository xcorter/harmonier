import {getChoices, getKeys, getFuncFromChoice} from '../choices';
import {CHANGE_KEY, CHANGE_FUNCTION} from "../constants/action_types";

const initialState = {
  keys: getKeys(),
  currentKey: null,
  choices: getChoices(),
  func: null
}

const filterKeys = (state) => {
  const choices = getChoices();
  const key = state.currentKey;
  const filtered =  choices.filter(choice => !key || choice.key == key);
  return {
    ...state,
    choices: filtered
  };
}

const filterFuncs = (state) => {
  const choices = getChoices();
  const func = state.func;
  const filtered =  choices.filter(choice => {
    return !func || getFuncFromChoice(choice) == func;
  });
  return {
    ...state,
    choices: filtered
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_KEY:
      state.currentKey = action.payload;
      return filterKeys(state);
    case CHANGE_FUNCTION:
      state.func = action.payload;
      return filterFuncs(state);
  }
  return {
    ...state
  };
}
