import {AUTH_ERROR, USER_LOADED, USER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS} from './types';
import {returnErrors} from './errorActions';
import axios from 'axios';
// import { config } from 'config';

//check token and load user
export const loadUser = () => (dispatch,getState) => {
    //user loading
    dispatch({ type: USER_LOADING})

    axios.get('/api/auth/user',tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })).catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status));
            dispatch({
                type:AUTH_ERROR
            })
        })
};

// Register User
export const register = ({name, email, password}) => dispatch => {
    //headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    //req body
    const body = JSON.stringify({name, email, password})
    axios.post('api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
    }


// Register Usersdata 
export const registerData = ({isConsent, age, gender}) => dispatch => {
    //headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    //req body
    const body = JSON.stringify({isConsent, age, gender})
    axios.post('api/usersdata', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
    }

//check token and load user
export const loadUserData = () => (dispatch,getState) => {
    //user loading
    dispatch({ type: USER_LOADING})

    axios.get('/api/auth/usersdata',tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })).catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status));
            dispatch({
                type:AUTH_ERROR
            })
        })
};

//logout User
export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    }
}


//Setup config / headers and token

export const tokenConfig = getState =>{
    
    //Get token from localstorage
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if(token){
        config.headers['x-auth-token']= token;
    }
    return config;
}