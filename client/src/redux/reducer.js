import { GET_DOGS } from "./actions";

const initialState = {
    users: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, users: action.payload};
        default:
            return {...state};
    }
};

export default reducer;