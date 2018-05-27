import {CHANGE_KEY} from "../constants/action_types";

function changeKey(key) {
  return {
    type: CHANGE_KEY,
    payload: key
  }
}
export default changeKey;
