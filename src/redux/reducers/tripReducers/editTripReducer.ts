import { PUT_TRIP } from "../../actions/postActions/action";

interface StockElement {
  _id: string;
}

interface InitialState {
  stock: StockElement[];
}

const initialState: InitialState = {
  stock: [],
};

const editTripReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PUT_TRIP:
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

export default editTripReducer;
