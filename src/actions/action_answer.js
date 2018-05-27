import {CHECK_ANSWER} from "../constants/action_types";

function checkAnswer(success) {
  return {
    type: CHECK_ANSWER,
    success: success
  }
}
export default checkAnswer;
