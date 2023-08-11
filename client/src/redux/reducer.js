import { GET_DOGS } from "./actions";

const initialState = {
    dogs: [],
    favoriteDogs: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, dogs: action.payload};
        default:
            return {...state};
    }
};

export default reducer;