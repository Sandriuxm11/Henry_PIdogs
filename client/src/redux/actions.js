import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const CLEAN_VIEW = "CLEAN_VIEW";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CLEAN_VIEW_SEARCH = "CLEAN_VIEW_HOME";

export const getDogs = () => {
    return async function (dispatch){
        const dogsRaw = await axios.get("http://localhost:3001/Dogs");
        const dogs = dogsRaw.data;
        dispatch({type: GET_DOGS, payload: dogs});
    };
};

export const getDogById = (id)=> {
    return async function (dispatch){
        const dogRaw = await axios.get(`http://localhost:3001/dogs/${id}`);
        const dog = dogRaw.data;
        dispatch({type: GET_DOG_BY_ID, payload: dog});
    };
};

export const cleanView = () => {
        return ({type: CLEAN_VIEW});
};

export const cleanViewSearch = () => {
    return ({type: CLEAN_VIEW_SEARCH});
};

export const searchByName = (name) => {
    return async function (dispatch){
        const dogByNameRaw = await axios.get(`http://localhost:3001/dogs/?name=${name}`);
        const dogByName = dogByNameRaw.data;
        dispatch({type: SEARCH_BY_NAME, payload: dogByName});
        
    };
};

