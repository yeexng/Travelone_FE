import { Dispatch } from "redux";
import { RootState } from "../../store/store";

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
    titleInput: titleInput.value || titleInput.placeholder,
    destinationInput: destinationInput.value || destinationInput.placeholder,
    dateInput: dateInput.value || dateInput.placeholder,
    budgetInput: budgetInput.value || budgetInput.placeholder,
    lookingForInput: lookingForInput.value || lookingForInput.placeholder,
    typeOfTravelInput: typeOfTravelInput.value || typeOfTravelInput.placeholder,
    splitCostInput: splitCostInput.value || splitCostInput.placeholder,
    addOnsInput: addOnsInput.value || addOnsInput.placeholder,
  };

  const option = {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(editedData),
  };

  return async (dispatch: any, getState: () => RootState) => {
    try {
      let res = await fetch(baseEndpoint + `/users/${tripId}`, option);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: PUT_TRIP,
          payload: data,
        });
        dispatch(getTripByIdAction(tripId)); //reload the user by calling the function again
      }
    } catch (error) {
      console.log(error);
    }
  };
};
