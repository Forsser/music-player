import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetcSong,
  fetcSongById,
  fetcPlaylistsByCategories,
} from "./allMusicAPI";

const getSongs = createAsyncThunk(
  "song/getSong",

  async () => {
    /*  const [songs, generalPages] = await Promise.all([
      fetcSong(),
      fetchGeneralPage(),
    ]);
    return { songs, generalPages }; */

    const response = await fetcSong();
    return response;
  }
);

const getSongById = createAsyncThunk(
  "song/getSongById",

  async (trackId) => {
    const response = await fetcSongById(trackId);
    return response.track;
  }
);

const getPlaylistByCategories = createAsyncThunk(
  "song/getPlaylistByCategories",

  async (categoriesId) => {
    console.log(categoriesId);
    const response = await fetcPlaylistsByCategories(categoriesId);

    return response;
  }
);

export { getSongs, getSongById, getPlaylistByCategories };
