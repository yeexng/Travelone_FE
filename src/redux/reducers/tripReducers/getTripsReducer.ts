import { GET_TRIPS } from "../../actions/postActions/action";

const initialState = {
    stock:[],
};

const getTripReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case GET_TRIPS:
            return{
                ...state,
                stock: action.payload,
            };
            default:
                return state;
    }
}

export default getTripReducer;