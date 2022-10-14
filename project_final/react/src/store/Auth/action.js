import {
  SET_USER,
  SET_LOGIN_ERROR,
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  ADD_BOOK
} from "./types";

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}
export function setLoginError(text) {
  return {
    type: SET_LOGIN_ERROR,
    text,
  };
}

export const getPosts = () => {
	return {
	  type: GET_POSTS,
	};
  };
  
  export const getPostsSuccess = (posts) => {
	return {
	  type: GET_POSTS_SUCCESS,
	  payload: posts,
	};
  };
  
  export const getPostsFail = (error) => {
	return {
	  type: GET_POSTS_FAIL,
	  payload: error,
	};
  };
  
 
