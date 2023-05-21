import { POST_TRIP_IMAGE } from "../../actions/secretActions/action";

interface Action {
  type: string;
  payload: any;
}

interface State {
  stock: any;
}

const initialState = {
  stock: null,
};

const postImageToSecretPostReducer = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case POST_TRIP_IMAGE:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default postImageToSecretPostReducer;
