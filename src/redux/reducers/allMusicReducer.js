import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getSongsfromGeneralPage,
  playTrack,
} from "../actions/allMusicActions.js";
import { getSongs, getSongById } from "../actions/songActions.js";
import { getArtistById } from "../actions/artistsActions.js";

const generalInitialState = {
  trendingTracks: [],
  popularArtists: [],
};
const songsInitialState = {
  trendingSongTracks: [],
  songsCategories: [],
  songsByCategories: [],
};

const artistInitialState = {
  popularArtistList: [],
  artists: [],
  artistById: {},
};
const setToken = createReducer([], (builder) => {
  builder.addCase(getSongsfromGeneralPage.fulfilled, (state, action) => {
    return action.payload.token;
  });
});

const generalPages = createReducer(generalInitialState, (builder) => {
  builder.addCase(getSongsfromGeneralPage.fulfilled, (state, action) => {
    /*     if (state.trendingTracks.length === 0) {
      return {
        ...state,
        trendingTracks: [
          ...state.trendingTracks,
          action.payload.trendingTracks,
        ],
      };
    }
    const allTracks = [
      ...state.trendingTracks,
      ...action.payload.trendingTracks,
    ];
    const uniqueTracks = allTracks.filter(
      (track, index, array) =>
        array.findIndex((t) => t.id === track.id) === index
    );
    return { state, trendingTracks: [...uniqueTracks] };*/
    state.trendingTracks = action.payload.trendingTracks;
    state.popularArtists = action.payload.popularArtistsFromMainPage;
  });
});

const songs = createReducer(songsInitialState, (builder) => {
  builder.addCase(getSongs.fulfilled, (state, action) => {
    state.songsCategories = action.payload.items;
  });
});
const artist = createReducer(artistInitialState, (builder) => {
  builder.addCase(getArtistById.fulfilled, (state, action) => {
    state.artistById = action.payload;
  });
});

const albums = createReducer([], (builder) => {});
const podcast = createReducer([], (builder) => {});

const currentTrack = createReducer({}, (builder) => {
  builder.addCase(playTrack.fulfilled, (state, action) => {
    state.trackUrl = action.payload.trackUrl;
    state.trackId = action.payload.trackId;
  });
  builder.addCase(getSongById.fulfilled, (state, action) => {
    state.trackData = action.payload;
  });
});

export const allMusicReducer = combineReducers({
  generalPages: generalPages,
  song: songs,
  artist: artist,
  albums: albums,
  podcast: podcast,
  token: setToken,
  currentTrack: currentTrack,
});
