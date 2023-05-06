import { POST_TRIP } from "../../actions/postActions/action";

const initialState = {
  stock: [],
};

const addTripReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_TRIP:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default addTripReducer;
