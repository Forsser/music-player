import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trackToggle } from "../../services/trackToggle.js";
import { SVGComponentMain } from "../svgComponents.jsx";
import { TrackCard } from "./track-card.jsx";

export const TopSongGlobal = ({ topSongGlobal }) => {
  const maxLengthArtist = 20; // Вкажи максимальну довжину тексту для імені виконавця
  const maxLengthTrack = 20; // Вкажи максимальну довжину тексту для назви треку
  let trackUrl = null;
  let trackId = null;
  const dispatch = useDispatch();

  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack.trackUrl
  );
  const isPlaying = useSelector((state) => state.togglePlay);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  }

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="section">
      <div className="section-title">
        <h2>Top Song Global</h2>
        <a href="#">See all</a>
      </div>
      <div className="track-list">
        <ul className="track-list__items">
          {topSongGlobal.map(({ track }) => {
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
      </div>
    </section>
  );
};

/*  <ul className="track-list__items">
          {topSongGlobal.map(({ track }) => {
            const artistName = truncateText(
              track.artists[0].name,
              maxLengthArtist
            );
            const trackName = truncateText(track.name, maxLengthTrack);
            return (
              <li
                key={track.id}
                className="track-list__item"
                onClick={() =>
                  trackToggle(
                    (trackUrl = track.preview_url),
                    (trackId = track.id),
                    currentPlayingTrack,
                    isPlaying,
                    dispatch
                  )
                }
              >
                <img
                  src={track.album.images[1].url}
                  className="track__image"
                  alt="Album cover"
                />
                <div className="track__info">
                  <p className="track__name">{trackName}</p>
                  <Link
                    className="track__artist"
                    to={`/artist/${track.artists[0].id}`}
                  >
                    <p>{artistName}</p>
                  </Link>
                </div>
                <SVGComponentMain
                  icon={
                    currentPlayingTrack === track.preview_url
                      ? isPlaying
                        ? "pause"
                        : "play"
                      : "play"
                  }
                />
              </li>
            );
          })}
        </ul> */
