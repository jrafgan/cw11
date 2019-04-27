import {push} from 'connected-react-router';
import axios from '../../axios-api'

export const REGISTER_USER_SUCCESS = 'REGISTER_USER _SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER _FAILURE';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const logoutUser = () => {
    console.log('this is logout ');
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        return axios.delete('/users/sessions', config).then(() => {dispatch({type: LOGOUT_USER});
            },
            error => {
                if (error.response) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: "No network connection "}))
                }
            }
        )
    }
};

export const registerUser = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(response => {
                dispatch(registerUserSuccess(response.data.user));
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: "No network connection "}))
                }
            }
        )
    }
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post('/users/sessions', userData).then(response => {
                dispatch(loginUserSuccess(response.data.user));
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(loginUserFailure(error.response.data));
                } else {
                    dispatch(loginUserFailure({global: "No network connection "}))
                }
            }
        )
    }
};