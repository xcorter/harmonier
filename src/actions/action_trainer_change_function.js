import {CHANGE_FUNCTION} from "../constants/action_types";

function changeFunction(func) {
  return {
    type: CHANGE_FUNCTION,
    payload: func
  }
}
export default changeFunction;
