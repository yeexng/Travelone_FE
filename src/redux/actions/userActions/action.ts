import { Dispatch } from "redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { User } from "../../../interfaces/iUsers";

export const ADD_USER = "ADD_USER"; //add new user
export const GET_USER = "GET_USER"; //fetch owner's profile
export const GET_USER_PROFILE = "GET_USER_PROFILE"; //fetch owner's profile
export const GET_USER_ID = "GET_USER_ID"; //fetch one specific user
export const PUT_USER_ID = "PUT_USER_ID"; // edit current user profile
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";

const baseEndpoint: String =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

//ADD NEW USER
export const addNewUserAction = (user: User) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await axios.post(baseEndpoint + "/users");
      dispatch({
        type: ADD_USER,
        payload: { user: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//GET PROFILE
export const getUserProfile = (userId: String) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await fetch(baseEndpoint + `/users/${userId}`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_USER_PROFILE,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//EDIT PROFILE
export const editUserProfile = (userId: String) => {
  const firstNameInput = document.getElementById(
    "first-name-change"
  ) as HTMLInputElement;
  const lastNameInput = document.getElementById(
    "last-name-change"
  ) as HTMLInputElement;
  const genderInput = document.getElementById(
    "gender-change"
  ) as HTMLInputElement;
  const emergencyInput = document.getElementById(
    "emergency-change"
  ) as HTMLInputElement;
  const aboutInput = document.getElementById(
    "about-change"
  ) as HTMLInputElement;
  const editedData = {
    firstName: firstNameInput.value
      ? firstNameInput.value
      : firstNameInput.placeholder,
    lastName: lastNameInput.value
      ? lastNameInput.value
      : lastNameInput.placeholder,
    gender: genderInput.value ? genderInput.value : genderInput.placeholder,
    emergencyContact: emergencyInput.value
      ? emergencyInput.value
      : emergencyInput.placeholder,
    about: aboutInput.value ? aboutInput.value : aboutInput.placeholder,
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
      let res = await fetch(baseEndpoint + `/users/${userId}`, option);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: PUT_USER_ID,
          payload: data,
        });
        dispatch(getUserProfile(userId)); //reload the user by calling the function again
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET ONE SPECIFIC USER

export const getUserById = (userId: string) => {
  return async (dispatch: any, getState: () => RootState) => {
    try {
      let res = await fetch(baseEndpoint + `/users/${userId}`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_USER_ID,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
