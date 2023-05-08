import { Dispatch } from "redux";
import { RootState } from "../../store/store";
export const ADD_SECRET_POST = "ADD_SECRET_POST";
export const GET_SECRET_POST = "GET_SECRET_POST";
export const GET_SECRET_POST_WITH_ID = "GET_SECRET_POST_WITH_ID";
export const EDIT_SECRET_POST = "EDIT_SECRET_POST";
export const ADD_SECRET_POST_IMAGE = "ADD_SECRET_POST_IMAGE";

const baseEndpoint: String =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

//GET SECRET POSTS
export const getSecretPostAction = () => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await fetch(baseEndpoint + `/posts`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_SECRET_POST,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//GET ONE SPECIFIC SECRET POST
export const getSecretPostByIdAction = (postId: String) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState
  ): Promise<void> => {
    try {
      let res = await fetch(baseEndpoint + `/posts/${postId}`);
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_SECRET_POST_WITH_ID,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
