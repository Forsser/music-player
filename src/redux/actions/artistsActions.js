import { createAsyncThunk } from "@reduxjs/toolkit";
import { fet } from "./allMusicAPI";
import { fetchArtistById } from "./allMusicAPI";

const getArtists = createAsyncThunk(
  "song/getSong",

  async () => {}
);
const getArtistById = createAsyncThunk(
  "artist/getArtistById",

  async (artistId) => {
    const response = await fetchArtistById(artistId);
    return response;
  }
);

export { getArtistById, getArtists };
