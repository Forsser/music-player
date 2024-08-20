import { useDispatch, useSelector, useMemo } from "react-redux";
import { useEffect, useState } from "react";
import playToggleSvg from "../../styles/svg/play-toggle.svg";
import { playTrack } from "../../redux/actions/allMusicActions.js";
import { togglePlay } from "../../redux/actions/togglePlay.js";
import { motion } from "framer-motion";

const TrackToggle = ({ track }) => {
  const dispatch = useDispatch();
  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack.trackUrl
  );

  const [playStates, setPlayStates] = useState(false);
  const isPlaying = useSelector((state) => state.togglePlay);

  const playSong = ({ trackUrl, trackId }) => {
    dispatch(playTrack({ trackUrl, trackId }));
    setPlayStates(() => {
      return currentPlayingTrack === trackUrl ? !playStates : true;
    });
    console.log(playStates);

    if (currentPlayingTrack === trackUrl) {
      dispatch(togglePlay(!isPlaying));
    } else {
      dispatch(togglePlay(true));
    }
  };

  return (
    <div className="trending-songs__cell--song--continer">
      <div className="trending-songs__img-container">
        <img
          className="trending-songs__img"
          src={track.track.album.images[2].url}
          alt={track.track.name}
        />
        <button
          className="song-play-toggle"
          type="button"
          onClick={() =>
            playSong({
              trackUrl: track.track.preview_url,
              trackId: track.track.id,
            })
          }
        >
          <svg width="25" height="25" className="song-play-toggle__svg">
            <use
              href={
                currentPlayingTrack === track.track.preview_url
                  ? playToggleSvg + (playStates ? "#pause" : "#play")
                  : playToggleSvg + "#play"
              }
            ></use>
          </svg>
        </button>
      </div>
      <p className="trending-songs__name">{track.track.name}</p>
    </div>
  );
};

export { TrackToggle };
