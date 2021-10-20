import { GET_NEWS, LIKE_NEWS, RESET_ERROR, SET_ERROR, START_LOAD, STOP_LOAD, SET_NEWS } from "../types";
import axios from 'axios'

//action to fetch news articles
export const getNews = () => (dispatch) => {

    dispatch({ type: RESET_ERROR })
    dispatch({ type: START_LOAD })

    axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=business&technology&apiKey=efe3eba0aba1471880c8d1d5d2b325a5`)
        .then((response) => {
            console.log(response.data);
            response.data.articles.map((item, i) =>{
                item.likes = 0;
                item.id = i + 1
            })
            dispatch({ type: GET_NEWS, payload:response.data })
            dispatch({ type: STOP_LOAD })
        }, (error) => {
            // console.log(error);
            dispatch({ type: STOP_LOAD })
            dispatch({ type: SET_ERROR })
        });

}

//action to like a picture
export const like = (id) => (dispatch) => {

    dispatch({ 
        type: LIKE_NEWS,
        payload:id 
    })

}

//action to read more
export const readMore = (news) => (dispatch) => {

    dispatch({ 
        type: SET_NEWS,
        payload:news 
    })

}








