import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTracksByPlaylist } from "../../redux/actions/songActions";
import "../../styles/playlist.scss";

export const Playlist = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(
    (state) => state.allMusic.playlistsByCategories
  );

  function removeHTMLTags(text) {
    // Регулярний вираз для пошуку частин тексту між < і >
    return text.replace(/<[^>]*>/g, "");
  }
  console.log(playlists);

  return (
    <div className="section-continer">
      <h1 className="playlist__title">Playlist</h1>
      <ul className="playlist__list">
        <Link to={"/song#song-categories"}>Back to playlist</Link>
        {playlists ? (
          playlists.map((playlist) => (
            <li className="playlist__item" key={playlist.id}>
              <Link to={`/tracks-by-playlist/${playlist.id}`}>
                <img
                  className="playlist__item-image"
                  src={playlist.images[0].url}
                  alt={playlist.name}
                />
                <div className="playlist__item-info">
                  <p className="playlist__item-description">
                    {removeHTMLTags(playlist.description)}
                  </p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="playlist__loading">Loading...</p>
        )}
      </ul>
    </div>
  );
};
