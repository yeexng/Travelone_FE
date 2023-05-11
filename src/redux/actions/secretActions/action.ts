import { Dispatch } from "redux";
import { RootState } from "../../store/store";
import axios from "axios";
export const ADD_SECRET_POST = "ADD_SECRET_POST";
export const GET_SECRET_POST = "GET_SECRET_POST";
export const GET_SECRET_POST_WITH_ID = "GET_SECRET_POST_WITH_ID";
export const EDIT_SECRET_POST = "EDIT_SECRET_POST";
export const ADD_SECRET_POST_IMAGE = "ADD_SECRET_POST_IMAGE";
export const POST_TRIP_IMAGE = "POST_TRIP_IMAGE"; //edit post image

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

//EDIT ONE SPECIFIC SECRET POST
export const editSecretPostByIdAction = (postId: string) => {
  const titleInput = document.getElementById(
    "title-change"
  ) as HTMLInputElement;
  const locationsInput = document.getElementById(
    "locations-change"
  ) as HTMLInputElement;
  const detailsInput = document.getElementById(
    "details-change"
  ) as HTMLInputElement;

  const editedData = {
    title: titleInput.value || titleInput.placeholder,
    locations: locationsInput.value || locationsInput.placeholder,
    details: detailsInput.value || detailsInput.placeholder,
  };

  return async (dispatch: any) => {
    try {
      const response = await axios.put(
        baseEndpoint + `/posts/${postId}`,
        editedData
      );
      dispatch(getSecretPostByIdAction(postId));
      //reload the user by calling the function again    } catch (error) {
    } catch (error) {
      console.log(error);
    }
  };
};

//UPLOAD IMAGES INTO THE SECRET POST
export const postImageToSecretPost = (postId: string, file: any) => {
  const formData = new FormData();
  formData.append("post", file);
  return async (dispatch: any) => {
    try {
      const response = await axios.put(
        baseEndpoint + `/posts/${postId}/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      console.log(data);
      dispatch({
        type: POST_TRIP_IMAGE,
        payload: data,
      });
      dispatch(getSecretPostByIdAction(postId));
      return data;
    } catch (error) {
      console.log(error);
    }
  };
};
