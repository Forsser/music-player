import axios from "axios";

/* const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: "Bearer 1POdFZRZbvb...qqillRxMr2z",
  },
});
const songsIds =
  "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B";
 */

const fetchGeneralPage = async (page = 4) => {
  const { data } = await axios.get("http://localhost:3030/api/", {
    params: { page },
  });
  return data;
};
const fetcSong = async () => {
  const { data } = await axios.get("http://localhost:3030/api/song/");

  return data;
};

const fetcSongById = async (trackId) => {
  const { data } = await axios.get(`http://localhost:3030/api/song/${trackId}`);

  return data;
};

const fetchArtist = async () => {
  const { data } = await axios.get("http://localhost:3030/api/artist");

  return data;
};

const fetchArtistById = async (id) => {
  const { data } = await axios.get(`http://localhost:3030/api/artist/${id}`);

  return data;
};

const fetcPlaylistsByCategories = async (categoriesId) => {
  const { data } = await axios.get(
    `http://localhost:3030/api/song/categories/${categoriesId}`
  );

  return data;
};
const fetchTopSongGlobalByPages = async (page) => {
  const { data } = await axios.get(
    "http://localhost:3030/api/song/top-song-global",
    {
      params: { page },
    }
  );
  return data;
};

const fetchTracksByPlaylist = async (playlistId) => {
  const { data } = await axios.get(
    `http://localhost:3030/api/song/playlist/${playlistId}`
  );

  return data;
};
export {
  fetchGeneralPage,
  fetcSong,
  fetcSongById,
  fetchArtist,
  fetchArtistById,
  fetcPlaylistsByCategories,
  fetchTopSongGlobalByPages,
  fetchTracksByPlaylist,
};
