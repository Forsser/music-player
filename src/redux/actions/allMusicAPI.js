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

const fetchGeneralPage = async () => {
  const { data } = await axios.get("http://localhost:3030/api/");
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
export {
  fetchGeneralPage,
  fetcSong,
  fetcSongById,
  fetchArtist,
  fetchArtistById,
};
