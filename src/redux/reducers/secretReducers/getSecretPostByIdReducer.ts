import { GET_SECRET_POST_WITH_ID } from "../../actions/secretActions/action";

const initialState = {
  stock: [],
};

const getSecretPostByIdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SECRET_POST_WITH_ID:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default getSecretPostByIdReducer;
