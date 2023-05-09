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

// GET TRIP
export const getTripAction = () => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await fetch(baseEndpoint + `/trips`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_TRIPS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET ONE SPECIFIC TRIP
export const getTripByIdAction = (tripId: string) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await fetch(baseEndpoint + `/trips/${tripId}`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_TRIPS_WITH_ID,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//EDIT TRIP
export const editTripByIdAction = (tripId: string) => {
  const titleInput = document.getElementById(
    "title-change"
  ) as HTMLInputElement;
  const destinationInput = document.getElementById(
    "destination-change"
  ) as HTMLInputElement;
  const dateInput = document.getElementById("date-change") as HTMLInputElement;
  const budgetInput = document.getElementById(
    "budget-change"
  ) as HTMLInputElement;
  const lookingForInput = document.getElementById(
    "lookingFor-change"
  ) as HTMLInputElement;
  const typeOfTravelInput = document.getElementById(
    "typeOfTravel-change"
  ) as HTMLInputElement;
  const splitCostInput = document.getElementById(
    "splitCost-change"
  ) as HTMLInputElement;
  const addOnsInput = document.getElementById(
    "addOns-change"
  ) as HTMLInputElement;

  const editedData = {
    //must be same with the BE module name
    title: titleInput.value || titleInput.placeholder,
    destination: destinationInput.value || destinationInput.placeholder,
    date: dateInput.value ? dateInput.value : dateInput.defaultValue,
    budget: budgetInput.value || budgetInput.placeholder,
    lookingFor: lookingForInput.value || lookingForInput.defaultValue,
    typeOfJourney: typeOfTravelInput.value || typeOfTravelInput.defaultValue,
    splitCost: splitCostInput.value || splitCostInput.defaultValue,
    addOns: addOnsInput.value || addOnsInput.placeholder,
  };
  return async (dispatch: any) => {
    try {
      const response = await axios.put(
        baseEndpoint + `/trips/${tripId}`,
        editedData
      );
      dispatch(getTripByIdAction(tripId)); //reload the user by calling the function again    } catch (error) {
    } catch (error) {
      console.log(error);
    }
  };
};
