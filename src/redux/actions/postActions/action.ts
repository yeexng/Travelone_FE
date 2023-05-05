import { Dispatch } from "redux";
import { RootState } from "../../store/store";

export const POST_TRIP = "POST_TRIP"; //add new trip
export const GET_TRIPS = "GET_TRIPS"; //fetch all the trips
export const GET_TRIPS_WITH_ID = "GET_TRIPS_WITH_ID"; //fetch one specific trips
export const PUT_TRIP = "PUT_TRIP"; //edit a trip
export const POST_TRIP_IMAGE = "POST_TRIP_IMAGE"; //edit post image

export const addTripAction = (editedData: object) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
    } catch (error) {}
  };
};
