import { GET_DOGS, GET_DOG_BY_ID, CLEAN_VIEW, SEARCH_BY_NAME, CLEAN_VIEW_SEARCH} from "./actions";

const initialState = {
    dogs: [],
    favoriteDogs: [],
    dog: {},
    dogSearched: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DOGS:
            return {...state, dogs: action.payload};
        case GET_DOG_BY_ID:
            return {...state, dog: action.payload};
        case CLEAN_VIEW:
            return {...state, dog: {}};
        case CLEAN_VIEW_SEARCH:
            return {...state, dogSearched: {}};
        case SEARCH_BY_NAME:
            return {...state, dogSearched: action.payload};
        default:
            return {...state};
    }
};

export default reducer;