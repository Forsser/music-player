import { createReducer, combineReducers } from "@reduxjs/toolkit";

const userMusicCollections = createReducer([], (builder) => {});
const userPlaylists = createReducer([], (builder) => {});
const userInfo = createReducer([], (builder) => {});

const userMusicReducer = combineReducers({
  musicCollections: userMusicCollections,
  playlists: userPlaylists,
  info: userInfo,
});

export default userMusicReducer;
