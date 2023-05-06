import { PUT_USER_ID } from "../../actions/userActions/action";

interface StockElement {
  _id: string;
  // add any other properties of the stock element object
}

interface InitialState {
  stock: StockElement[];
}

const initialState: InitialState = {
  stock: [],
};

const editUserProfileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PUT_USER_ID:
      return {
        ...state,
        stock: state.stock.map((stockElement) =>
          stockElement._id === action.payload.id ? action.payload : stockElement
        ),
      };
    default:
      return state;
  }
};

export default editUserProfileReducer;
