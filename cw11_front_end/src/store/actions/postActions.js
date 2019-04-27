import axios from '../../axios-api';
import {push} from "connected-react-router";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';


export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});

export const getPosts = () => {
    return dispatch => {
        return axios.get('/posts').then(
            response => {
                dispatch(fetchPostsSuccess(response.data));
            });
    };
};

export const getPost = postId => {
    return dispatch => {
        return axios.get('/posts?id=' + postId).then(
            response => {
                dispatch(fetchPostSuccess(response.data));
            });
    };
};

export const getCommentsByPost = (postId) => {
    return dispatch => {
        return axios.get('/comments?id=' + postId).then(
            response => {
                dispatch(fetchCommentsSuccess(response.data));

            });
    };
};

export const createPost = postData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.post('/posts/', postData, config).then(
            response => {
                dispatch(push('/'));

            });
    };
};

export const createComment = commentData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.post('/comments', commentData, config).then(
            response => {
                dispatch(push('/'));
            });
    };
};
