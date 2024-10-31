import React from "react";
import { Link } from "react-router-dom";
import { SVGComponentMain } from "../svgComponents.jsx";

export const TrackCard = ({
  track,
  currentPlayingTrack,
  isPlaying,
  dispatch,
  trackToggle,
  formatDuration,
  handleArtist,
}) => {
  const trackUrl = track.preview_url;
  const trackId = track.id;

  return (
    <li
      key={trackId}
      className="card"
      onClick={() =>
        trackToggle(trackUrl, trackId, currentPlayingTrack, isPlaying, dispatch)
      }
    >
      <img className="card__img" src={track.album.images[1].url} alt="song" />
      <div className="card__text">
        <p className="card__text__name">{track.name}</p>
        <div className="card__text__item">
          <Link
            to={`/artist/${track.artists[0].id}`}
            className="card__text--hover"
          >
            {track.artists[0].name}
          </Link>
          <p>{formatDuration(track.duration_ms)}</p>
        </div>
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
};
