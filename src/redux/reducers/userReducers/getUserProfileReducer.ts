import { GET_USER_PROFILE } from "../../actions/userActions/action";

const initialState = {
  stock: [],
};

const getUserProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default getUserProfileReducer;
