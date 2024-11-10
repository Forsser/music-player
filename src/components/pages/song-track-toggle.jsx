import { useDispatch, useSelector, useMemo } from "react-redux";
import { useEffect, useState } from "react";
import playToggleSvg from "../../styles/svg/play-toggle.svg";
import { playTrack } from "../../redux/actions/allMusicActions.js";
import { togglePlay } from "../../redux/actions/togglePlay.js";
import { SVGComponent, SVGComponentMain } from "../svgComponents.jsx";

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
          src={track.album.images[2].url}
          alt={track.name}
        />
        <button
          className="song-play-toggle"
          type="button"
          onClick={() =>
            playSong({
              trackUrl: track.preview_url,
              trackId: track.id,
            })
          }
        >
          <SVGComponentMain
            icon={
              currentPlayingTrack === track.preview_url
                ? isPlaying
                  ? "pause"
                  : "play"
                : "play"
            }
          />
        </button>
      </div>
      <p className="trending-songs__name">{track.name}</p>
    </div>
  );
};

export { TrackToggle };
