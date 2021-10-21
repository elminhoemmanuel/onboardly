import { SET_METHOD } from "../types";

//action to like a picture
export const setMethod = (method) => (dispatch) => {

    dispatch({ 
        type: SET_METHOD,
        payload:method
    })

}










