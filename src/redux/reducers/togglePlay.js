import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { togglePlay } from "../actions/togglePlay";

const togglePlayReducer = createReducer(false, (builder) => {
  builder.addCase(togglePlay.fulfilled, (state, action) => {
    return action.payload;
  });
});

export { togglePlayReducer };
