export const ADD_SECRET_POST = "ADD_SECRET_POST";
export const GET_SECRET_POST = "GET_SECRET_POST";
export const GET_SECRET_POST_WITH_ID = "GET_SECRET_POST_WITH_ID";
export const EDIT_SECRET_POST = "EDIT_SECRET_POST";
export const ADD_SECRET_POST_IMAGE = "ADD_SECRET_POST_IMAGE";

const baseEndpoint: String =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";
