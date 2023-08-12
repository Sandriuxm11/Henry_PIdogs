import { GET_DOGS, GET_DOG_BY_ID, CLEAN_VIEW} from "./actions";

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
        case CLEAN_VIEW:
            return {...state, dog: {}};
        default:
            return {...state};
    }
};

export default reducer;