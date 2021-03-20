import{USER_LOADING,USER_LOADED,USER_SIGNEDIN,USER_SIGNEDOUT, AUTH_ERROR, REGISTER_SUCCESS,REGISTER_FAIL, LOGOUT_SUCCESS}from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:null
}

export default function(state = initialState,action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            };
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            };
        case USER_SIGNEDIN:
        case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
            };
        case AUTH_ERROR:
        case USER_SIGNEDOUT:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false
            };
        default:
            return state;
    }
}
