import { createReducer } from "@reduxjs/toolkit";
import { setLoadedCount } from "./themeActions";

const initialState = {
  loadedCount: 0,
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoadedCount, (state, action) => ({
    ...state,
    loadedCount: action.payload,
  }));
});
