import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { trackToggle } from "../../services/trackToggle.js";
import { getTracksByPlaylist } from "../../redux/actions/songActions.js";
import { SVGComponentMain } from "../svgComponents.jsx";
import { TrackCard } from "../sections/track-card.jsx";

export const TracksByPlaylist = () => {
  const { playlistId } = useParams();
  console.log(playlistId);

  const maxLengthArtist = 20; // Вкажи максимальну довжину тексту для імені виконавця
  const maxLengthTrack = 20; // Вкажи максимальну довжину тексту для назви треку

  const dispatch = useDispatch();
  useEffect(() => {
    if (playlistId) {
      dispatch(getTracksByPlaylist(playlistId)); // Робимо запит на сервер з ID плейлиста
    }
  }, [playlistId, dispatch]);

  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack.trackUrl
  );
  const isPlaying = useSelector((state) => state.togglePlay);

  const trackList = useSelector((state) => state.allMusic.tracksByPlaylist);
  console.log(trackList);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  }

  const [topSongGlobalPage, setTopSongGlobalPage] = useState(0);

  /*   const handlePageIncrement = () => {
    setTopSongGlobalPage((prevPage) => prevPage + 1);
    console.log(topSongGlobalPage);

    dispatch(getTopSongGlobalByPages(2));
  };

  const handlePageDecrement = () => {
    setTopSongGlobalPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  }; */

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="section-continer">
      <div className="section-title">
        <Link to={"/playlist"}>Back</Link>
      </div>
      <div className="track-list">
        <ul className="track-list__items">
          {trackList.map(({ track }) => {
            const artistName = truncateText(
              track.artists[0].name,
              maxLengthArtist
            );
            const trackName = truncateText(track.name, maxLengthTrack);
            return (
              <TrackCard
                key={track.id}
                track={track}
                currentPlayingTrack={currentPlayingTrack}
                isPlaying={isPlaying}
                dispatch={dispatch}
                trackToggle={trackToggle}
                formatDuration={formatDuration}
              />
            );
          })}
        </ul>

        {/*         <button onClick={handlePageDecrement}>back...</button>
        <button onClick={handlePageIncrement}>Add more...</button>
        <p>Current Page: {topSongGlobalPage}</p> */}
      </div>
    </section>
  );
};
