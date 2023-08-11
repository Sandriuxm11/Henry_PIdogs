import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";

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
    }
}