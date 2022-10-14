import state from "./state";
import AuthState from "./state";
import { SET_USER, SET_LOGIN_ERROR, GET_POSTS, GET_POSTS_FAIL, GET_POSTS_SUCCESS, ADD_BOOK, GET_BOOK } from "./types";
const Reducer = (state = AuthState, options) => {
  switch (options.type) {
    case SET_USER:
      // console.log(options.user);
      state.profile = options.user;
      break;
    case SET_LOGIN_ERROR:
      state.loginError = options.text;
      break;
    case GET_POSTS:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: options.payload, loadingPosts: false };
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      break;
    // case ADD_BOOK:
    //   state.books = { ...state.books, books: options.payload }
    //   break;
    // case GET_BOOK: 
    //   return {
    //     ...state,
    //     books: [...state.books, options.book],
    //     loading: false,
    //   };
    //   break
  }

  return { ...state };
};

export default Reducer;
