import { GET_DOGS, GET_DOG_BY_ID } from "./actions";

const initialState = {
    dogs: [],
    favoriteDogs: [],
    dog: {},
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, dogs: action.payload};
        case GET_DOG_BY_ID:
            return {...state, dog: action.payload};
        default:
            return {...state};
    }
};

export default reducer;