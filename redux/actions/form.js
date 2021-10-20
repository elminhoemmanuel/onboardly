import { SET_METHOD, TOGGLE_EXP } from "../types";

//action to like a picture
export const setMethod = (method) => (dispatch) => {

    dispatch({ 
        type: SET_METHOD,
        payload:method
    })

}

//action to like a picture
export const toggleExp = () => (dispatch) => {

    dispatch({ 
        type: TOGGLE_EXP,
    })

}










