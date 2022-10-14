import { bookState } from "./state";
import { ADD_BOOK } from "./types";

export const bookReducer = (state = bookState, action) => {
    switch (action.type) {
        // case SET_POST_DATA:
        //     state.posts = action.payload
        //     break;
        case ADD_BOOK:
            state.books = action.book
            break;
        // case GET_BOOK:
        //     state.books = {...state.books, action.book }
        //         loading: false,
        //         break
        default:
            break;
    }

    return { ...state }
}