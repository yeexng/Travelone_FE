import axios from "axios";
import { Dispatch } from "redux";
import { getTripByIdAction } from "../postActions/action";

const baseEndpoint: String =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

export const deleteCommentAction = async (
  postId: string,
  commentId: String
) => {
  return async (dispatch: Dispatch) => {
    // try {
    //   await axios.delete(
    //     baseEndpoint + `/posts/${postId}/comments/${commentId}`
    //   );
    //   console.log(
    //     `Comment with ID ${commentId} has been deleted successfully.`
    //   );
    //   dispatch(getTripByIdAction(postId));
    // } catch (error) {
    //   console.error(`Error deleting Comment with ID ${commentId}`);
    // }
  };
};
