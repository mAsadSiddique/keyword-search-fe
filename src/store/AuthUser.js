import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
};

const AuthUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        handleUserLogin: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const authUserSelector = (state) => state.user;

export const { handleUserLogin } = AuthUser.actions;

export default AuthUser.reducer;
