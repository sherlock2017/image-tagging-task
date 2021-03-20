import{GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initialState = {
    msg:{},
    staus:null,
    id:null
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_ERRORS:
            return{
                msg:action.payload.msg,
                staus:action.payload.staus,
                id:action.payload.id    
            };
        case CLEAR_ERRORS:
            return{
                msg:{},
                staus:null,
                id:null
            };
        default:
            return state;
    }
}