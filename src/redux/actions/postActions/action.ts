import { Dispatch } from "redux";
import { RootState } from "../../store/store";
import axios from "axios";

export const POST_TRIP = "POST_TRIP"; //add new trip
export const GET_TRIPS = "GET_TRIPS"; //fetch all the trips
export const GET_TRIPS_WITH_ID = "GET_TRIPS_WITH_ID"; //fetch one specific trips
export const PUT_TRIP = "PUT_TRIP"; //edit a trip
export const POST_TRIP_IMAGE = "POST_TRIP_IMAGE"; //edit post image

const baseEndpoint: String =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

export const addTripAction = (newData: object) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await axios.post(baseEndpoint + "/trips");
      dispatch({
        type: POST_TRIP,
        payload: newData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
