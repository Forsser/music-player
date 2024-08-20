import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcSong, fetcSongById } from "./allMusicAPI";

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

export { getSongs, getSongById };
