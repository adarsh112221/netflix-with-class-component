import { SHOW_BODY } from "../actions/actionType";

const initalAccordianState = {
  val: false,
  id:null
};
export default function accordian(state = initalAccordianState, action) {
  switch (action.type) {
    case SHOW_BODY:
      return {...state,
        val:action.val,
        id:action.id
        
      };
    default:
      return state;
  }
}
