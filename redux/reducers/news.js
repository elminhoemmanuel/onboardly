import {  GET_NEWS, LIKE_NEWS, RESET_ERROR, SET_ERROR, SET_NEWS, START_LOAD, STOP_LOAD } from "../types";


const initialState = {
  articles:[],
  loading: false,
  error:"",
  newsResponse:{},
  singleArticle:{}
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_NEWS:
      let newArticles = state.articles
      newArticles.map((item) =>{
        if(item.id === action.payload){
          item.likes = item.likes + 1
        }
      })
      return {
        ...state,
        articles: newArticles
      };
    case GET_NEWS:
      return {
        ...state,
        articles:action.payload.articles,
        newsResponse:action.payload,
      };
    case SET_NEWS:
      return {
        ...state,
        singleArticle:action.payload
      };
    case START_LOAD :
      return {
        ...state,
        loading:true
      };
    case STOP_LOAD :
      return {
        ...state,
        loading:false
      };
    case RESET_ERROR:
      return {
        ...state,
        error:""
      };
    case SET_ERROR:
      return {
        ...state,
        error:"Something went wrong!! Please refresh to try again",
      };
    default:
      return state;
  }
};