import { ADD_USER_AVATAR } from "../../actions/userActions/action";

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

const addProfileAvatarReducer = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_USER_AVATAR:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default addProfileAvatarReducer;
