import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTIVITY_SELECTED } from "../../constant/ConstantString";

const initialState = {
    keywordPlannerArray: '',
    isKeywordsLoading: false,
};

const KeywordPlannerSlice = createSlice({
    name: "keywordPlanner",
    initialState,
    reducers: {
        setkeywordPlanner: (state, action) => {
            state.keywordPlannerArray = action.payload;
        },
        setKeywordLoading: (state, action) => {
            state.isKeywordsLoading = action.payload
        }
    },
});

export const keywordPlannerSelector = (state) => state.keywordPlanner;

export const { setkeywordPlanner, setKeywordLoading } = KeywordPlannerSlice.actions;

export default KeywordPlannerSlice.reducer;
