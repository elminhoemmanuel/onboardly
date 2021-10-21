import {  INCR_STEP , DECR_STEP, SET_METHOD }  from "../types";


const initialState = {
  step:1,
  method:"bvn",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR_STEP:
      return {
        ...state,
        step: state.step + 1
      };
    case DECR_STEP:
      return {
        ...state,
        step: state.step - 1
      };
    case SET_METHOD:
      return {
        ...state,
        method: action.payload
      };
    default:
      return state;
  }
};