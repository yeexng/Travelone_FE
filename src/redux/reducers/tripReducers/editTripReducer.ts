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
        stock: state.stock.map(
          (stockElement) =>
            stockElement._id === action.payload.id
              ? //return action payload (modified item) instead of
                //  original item when item id is updated item id
                action.payload
              : stockElement //ids not the same, return original item
        ),
      };
    default:
      return state;
  }
};

export default editTripReducer;
