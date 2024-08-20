import { configureStore } from "@reduxjs/toolkit";
import userMusicReducer from "./reducers/userReducer";
import { allMusicReducer } from "./reducers/allMusicReducer";
import { togglePlayReducer } from "./reducers/togglePlay";

export const store = configureStore({
  reducer: {
    allMusic: allMusicReducer,
    userMusic: userMusicReducer,
    togglePlay: togglePlayReducer,
  },
});
