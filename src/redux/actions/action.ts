import { Dispatch } from "redux";
import { RootState } from "../store/store";

export const GET_USER = "GET_USER"; //fetch owner's profile
export const GET_USER_PROFILE ="GET_USER_PROFILE";//fetch owner's profile
export const GET_USER_ID = "GET_USER_ID"; //fetch one specific user
export const PUT_USER_ID = "PUT_USER_ID"; // edit current user profile
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const GET_ALL_PROFILE = "GET_ALL_PROFILE";

const baseEndpoint:String = process.env.REACT_APP_BE_URL as string ||'http://localhost:3005';

//PROFILE
export const getUserProfile = (userId:String) =>{
    return async(dispatch:Dispatch, getState:()=> RootState) =>{
        try {
            let res = await fetch(baseEndpoint + `/users/${userId}`)
            if (res.ok){
                let data = await res.json();
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: data,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const editUserProfile = (userId: String) => {
const nameInput = document.getElementById("change-name");
const familyInput = document.getElementById("family-name")
}