import React from "react";

export const SecondAside = () => {
  return (
    <aside className="now-playing">
      <section className="current-song">
        <img src="path_to_now_playing_image" alt="Now Playing" />
        <h3 className="song-title">Cry</h3>
        <p className="artist-name">Cigarettes After Sex</p>
      </section>
      <section className="queue">
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
            <button className="play-button">▶</button>
          </li>
        </ul>
      </section>
    </aside>
  );
};
