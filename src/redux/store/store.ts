import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
    storage: localStorage,
    key: "root"
}

const combinedReducer = combineReducers({})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
})

const persistedStore = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store, persistedStore }