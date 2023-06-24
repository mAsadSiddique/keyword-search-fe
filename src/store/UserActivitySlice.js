import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTIVITY_SELECTED } from "../../constant/ConstantString";

const initialState = {
    SelectedActivity: "",
    IsLoginResgisterScreenSelected: ''
};

const UserActivitySlice = createSlice({
    name: "userActivity",
    initialState,
    reducers: {
        getUserActivity: (state, action) => {
            state.SelectedActivity = action.payload;
        },
        getSelectedScreen: (state, action) => {
            state.IsLoginResgisterScreenSelected = action.payload
        }
    },
});

export const userActivitySelector = (state) => state.userActivity;

export const { getUserActivity, getSelectedScreen } = UserActivitySlice.actions;

export default UserActivitySlice.reducer;
