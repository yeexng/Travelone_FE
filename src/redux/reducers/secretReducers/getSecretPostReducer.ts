import { GET_SECRET_POST } from "../../actions/secretActions/action";

const initialState = {
  stock: [],
};

const getSecretPostReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SECRET_POST:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default getSecretPostReducer;
