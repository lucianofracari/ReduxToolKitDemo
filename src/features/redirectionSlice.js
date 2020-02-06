import { createSlice } from "@reduxjs/toolkit";

const redirectionSlice = createSlice({
  name: "redirection",
  initialState: {},
  reducers: {
    SetRedirection: (state, action) => ({ ...state, ...action.payload }),
    ResetRedirection: state => ({})
  }
});

export const { actions, reducer } = redirectionSlice;
export const { SetRedirection, ResetRedirection } = actions;
