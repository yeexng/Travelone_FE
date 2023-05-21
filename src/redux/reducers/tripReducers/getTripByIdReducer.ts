import { GET_TRIPS_WITH_ID } from "../../actions/postActions/action";

const initialState = {
  stock: [],
};

const getTripByIdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TRIPS_WITH_ID:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default getTripByIdReducer;
