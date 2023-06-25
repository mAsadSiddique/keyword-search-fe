import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import UserActivitySlice from "./UserActivitySlice";
import AuthUser from "./AuthUser";

const persistToken = {
    key: 'token',
    version: 1.0,
    storage
}

const reducerPersist = combineReducers({
    user: persistReducer(persistToken, AuthUser),
    userActivity: UserActivitySlice,
})

export const store = configureStore({
    reducer: reducerPersist,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})