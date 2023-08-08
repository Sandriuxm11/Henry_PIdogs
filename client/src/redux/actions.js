import axios from "axios";

export const GET_DOGS = "GET_DOGS";

export const getDogs = () => {
    return async function (dispatch){
        const dogsRaw = await axios.get("http://localhost:3001/Dogs");
        const dogs = dogsRaw.data;
        dispatch({type: GET_DOGS, payload: dogs});
    };
};