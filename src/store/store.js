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
import AuthUser from "./AuthUser";
import KeywordPlannerSlice from "./KeywordPlannerSlice";

const persistToken = {
    key: 'token',
    version: 1.0,
    storage
}

const persistKeyWords = {
    key: 'keywords',
    storage
}

const reducerPersist = combineReducers({
    user: persistReducer(persistToken, AuthUser),
    keywordPlanner: persistReducer(persistKeyWords, KeywordPlannerSlice)
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