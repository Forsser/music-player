/* import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../styles/music-player.scss";
import { useSelector } from "react-redux";
import Svg from "../styles/svg/symbol-defs.svg";

const Player = ({ trackUri }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPlay = useSelector((state) => state.togglePlay);

  useEffect(() => {
    if (!trackUri) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Затримка 50ms

    return () => {
      clearTimeout(timer);
      setIsVisible(false); // При очищенні, щоб підготувати до наступного треку
    };
  }, [trackUri]);

  return (
    <div className="player-container">
      {trackUri ? (
        <div className={`react-player-wrapper ${isVisible ? "visible" : ""}`}>
          <ReactPlayer
            url={trackUri}
            controls
            playing={isPlay}
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <div className="react-player-off"></div>
      )}
    </div>
  );
};

export default Player;
 */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Slider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { togglePlay } from "../redux/actions/togglePlay.js";

const PlayerContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: "47%",
  transform: "translate(-50%)", // Початкова позиція (схована)
  width: "55%",

  backgroundColor: "rgba(28, 28, 28, 0.95)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  height: "70px",
  opacity: 0,
  zIndex: 9,
  transition: "opacity 0.35s ease, transform 0.35s ease",
  pointerEvents: "auto",
  "&.visible": {
    opacity: 1,
    transform: "translate(-50%, 0px)", // Кінцева позиція (видима)
  },
  "@media (max-width: 768px)": {
    width: "100%",
    borderRadius: 0,
  },
}));

const TimeDisplay = styled(Box)({
  color: "#a7a7a7",
  fontSize: "12px",
  marginTop: "4px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 16px",
});

const ControlsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  marginTop: "-10px",
});

const ProgressSlider = styled(Slider)(({ theme }) => ({
  color: "#fff",
  height: 4,
  padding: 0,
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#fff",
  },
  "& .MuiSlider-thumb": {
    display: "none",
    "&:hover, &.Mui-focusVisible": {
      display: "block",
    },
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#5e5e5e",
  },
  "&:hover": {
    "& .MuiSlider-thumb": {
      display: "block",
    },
  },
}));

const VolumeSlider = styled(Slider)(({ theme }) => ({
  color: "#fff",
  width: 100,
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#fff",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#5e5e5e",
  },
  "&:hover": {
    "& .MuiSlider-thumb": {
      display: "block",
    },
  },
}));

const ControlButton = styled(IconButton)({
  color: "#fff",
  padding: "8px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

const Player = ({ trackUri }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const isPlay = useSelector((state) => state.togglePlay);
  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack.trackUrl
  );
  const playerRef = React.useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!trackUri) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [trackUri]);

  useEffect(() => {
    setPlaying(isPlay);
  }, [isPlay]);

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (event, newValue) => {
    console.log(event);

    setProgress(newValue);
    playerRef.current?.seekTo(newValue);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const remainingTime = duration - progress * duration;

  if (!trackUri) {
    return null;
  }

  return (
    <PlayerContainer className={isVisible ? "visible" : ""}>
      <ReactPlayer
        ref={playerRef}
        url={trackUri}
        controls
        playing={isPlay}
        volume={volume}
        style={{ display: "none" }}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />

      <ProgressSlider
        value={progress}
        onChange={handleSeek}
        min={0}
        max={1}
        step={0.001}
      />

      <TimeDisplay>
        <span>{formatTime(progress * duration)}</span>
        <span>-{formatTime(remainingTime)}</span>
      </TimeDisplay>

      <ControlsContainer>
        <ControlButton>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 6v12l-4-6 4-6z" />
          </svg>
        </ControlButton>

        <ControlButton
          onClick={() => {
            console.log("Control button clicked");
            setPlaying(!isPlay);
            dispatch(togglePlay(!isPlay));
          }}
        >
          {isPlay ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          )}
        </ControlButton>

        <ControlButton>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17 6v12l4-6-4-6z" />
          </svg>
        </ControlButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ControlButton onClick={() => setVolume(volume === 0 ? 1 : 0)}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
              />
            </svg>
          </ControlButton>
          <VolumeSlider
            value={volume}
            onChange={(e, newValue) => setVolume(newValue)}
            min={0}
            max={1}
            step={0.01}
          />
        </Box>
      </ControlsContainer>
    </PlayerContainer>
  );
};

export default Player;
