import React, { useEffect, useState } from "react";
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
