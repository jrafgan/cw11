import {
    FETCH_COMMENTS_SUCCESS, FETCH_POST_SUCCESS,
    FETCH_POSTS_SUCCESS
} from "../actions/postActions";

const initialState = {
    posts: null,
    post: null,
    comments: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            console.log(action.posts);
            return {...state, posts: action.posts};

        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};

        case FETCH_POST_SUCCESS:
            return {...state, post: action.post};

        default:
            return state;
    }
};

export default postReducer;