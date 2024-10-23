import React from "react";
import "../../styles/second-asaid.scss";
import { getSongById } from "../../redux/actions/songActions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const SecondAside = () => {
  const dispatch = useDispatch();
  const currentTrackId = useSelector(
    (state) => state.allMusic.currentTrack.trackId
  );
  const currentTrackData = useSelector(
    (state) => state.allMusic.currentTrack.trackData
  );

  useEffect(() => {
    if (currentTrackId) {
      dispatch(getSongById(currentTrackId));
    }
  }, [currentTrackId]);
  return (
    <aside className="now-playing">
      <section className="current-song">
        <h3 className="song-title">
          <div className="now playing" id="music">
            <span className="bar n1"></span>
            <span className="bar n2"></span>
            <span className="bar n3"></span>
            <span className="bar n4"></span>
            <span className="bar n5"></span>
            <span className="bar n6"></span>
            <span className="bar n7"></span>
            <span className="bar n8"></span>
            Now Playing
          </div>
        </h3>
        {currentTrackData ? (
          <div>
            <img src={currentTrackData.album.images[1].url} alt="" />
            <p className="artist-name">{currentTrackData.artists[0].name}</p>
            <p className="artist-name">{currentTrackData.name}</p>
            <p>Album: {currentTrackData.album.name}</p>
          </div>
        ) : null}
      </section>
      {/*       <section className="queue">
        <h2>Queue</h2>
        <ul>
          <li className="queue-item">
            <img src="path_to_queue_image" alt="Song Image" />
            <div className="song-info">
              <div className="song-title">Sweet</div>
              <div className="artist-name">Cigarettes After Sex</div>
            </div>
            <button className="play-button">▶</button>
          </li>
          <li className="queue-item">
            <img src="path_to_queue_image" alt="Song Image" />
            <div className="song-info">
              <div className="song-title">Heavenly</div>
              <div className="artist-name">Cigarettes After Sex</div>
            </div>
            <button className="play-button">▶</button>
          </li>
          <li className="queue-item">
            <img src="path_to_queue_image" alt="Song Image" />
            <div className="song-info">
              <div className="song-title">Apocalypse</div>
              <div className="artist-name">Cigarettes After Sex</div>
            </div>
          </li>
        </ul>
      </section> */}
    </aside>
  );
};
