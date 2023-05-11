import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import getUserProfileReducer from "../reducers/userReducers/getUserProfileReducer";
import editUserProfileReducer from "../reducers/userReducers/editUserProfileReducer";
import getTripReducer from "../reducers/tripReducers/getTripsReducer";
import getTripByIdReducer from "../reducers/tripReducers/getTripByIdReducer";
import editTripReducer from "../reducers/tripReducers/editTripReducer";
import getSecretPostReducer from "../reducers/secretReducers/getSecretPostReducer";
import getSecretPostByIdReducer from "../reducers/secretReducers/getSecretPostByIdReducer";
import editSecretPostReducer from "../reducers/secretReducers/editSecretPostByIdReducer";
import postImageToSecretPostReducer from "../reducers/secretReducers/postImageToSecretPostReducer";
import addProfileAvatarReducer from "../reducers/userReducers/postProfileAvatar";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const combinedReducer = combineReducers({
  userData: getUserProfileReducer, //fetch user data
  editUserData: editUserProfileReducer, // edited user Data
  tripData: getTripReducer, // fetch all the trip data
  oneTripData: getTripByIdReducer, // fetch one trip data
  editTripData: editTripReducer, //edit one trip
  secretPostData: getSecretPostReducer, // fetch secret posts
  oneSecretPostData: getSecretPostByIdReducer, // fetch one posts data
  editSecretPostData: editSecretPostReducer, //edit one secret post
  postImageToSecretPost: postImageToSecretPostReducer, //edit image to secret post
  postProfileAvatar: addProfileAvatarReducer, //edit image to profile
});
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistedStore };
