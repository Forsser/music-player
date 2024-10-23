import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGeneralPage } from "./allMusicAPI";

const getSongsfromGeneralPage = createAsyncThunk(
  "api/getGeneral",

  async () => {
    const response = await fetchGeneralPage();

    return response;
  }
);

const playTrack = createAsyncThunk("music/play", (track) => {
  return track;
});

export { getSongsfromGeneralPage, playTrack };
