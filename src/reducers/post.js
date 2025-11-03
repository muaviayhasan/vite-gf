import { RECEIVE_POSTS } from "../constants/action-types";

const initialState = {
    items: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return { ...state,
                items: action.posts };
        default:
            return state;
    }
};
export default postReducer;