import {
  GET_ALL_CHARECTERS_BEGIN,
  GET_ALL_CHARECTERS_SUCCESS,
  GET_ALL_CHARECTERS_FAILURE,
  GET_ALL_CHARECTERS_DISMISS,
} from "../constants/charecters";

const initialState = {
  getAllCharectersBegin: false,
  getAllCharectersuccess: false,
  getAllCharectersFailure: false,
  getAllCharectersData: [],
};

export default function charecterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARECTERS_BEGIN:
      return {
        ...state,
        getAllCharectersBegin: true,
        getAllCharectersuccess: false,
        getAllCharectersFailure: false,
      };
    case GET_ALL_CHARECTERS_SUCCESS:
      return {
        ...state,
        getAllCharectersBegin: false,
        getAllCharectersuccess: true,
        getAllCharectersFailure: false,
        getAllCharectersData: action.data,
      };
    case GET_ALL_CHARECTERS_FAILURE:
      return {
        ...state,
        getAllCharectersBegin: false,
        getAllCharectersuccess: false,
        getAllCharectersFailure: true,
        getAllCharectersData: action.data,
      };
    case GET_ALL_CHARECTERS_DISMISS:
      return {
        ...state,
        getAllCharectersBegin: false,
        getAllCharectersuccess: false,
        getAllCharectersFailure: false,
        
      };
    default:
      return state
  }
}
