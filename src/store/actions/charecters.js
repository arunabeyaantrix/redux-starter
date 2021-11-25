import {
    GET_ALL_CHARECTERS_BEGIN,
    GET_ALL_CHARECTERS_SUCCESS,
    GET_ALL_CHARECTERS_FAILURE,
    GET_ALL_CHARECTERS_DISMISS,
  } from "../constants/charecters";

  import axios from "axios";

  export function getCharecters() {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_CHARECTERS_BEGIN,
        });
        const promise = new Promise((resolve, reject) => {
            let doRequest = axios.get(`https://www.breakingbadapi.com/api/characters`);

            doRequest.then(
                (res) => {
                    dispatch({
                        type: GET_ALL_CHARECTERS_SUCCESS,
                        data: res.data,
                    });
                    resolve(res);
                },
                (err) => {
                    dispatch({
                        type: GET_ALL_CHARECTERS_FAILURE,
                        data: err.response,
                    });
                    reject(err);
                }
            );
        });

        return promise;
    };
}
export function dismissGetAllCharecters() {
    return {
        type: GET_ALL_CHARECTERS_DISMISS,
    };
}