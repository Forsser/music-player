import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/playlist.scss";

export const Playlist = () => {
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
        {playlists ? (
          playlists.map((playlist) => (
            <li className="playlist__item" key={playlist.id}>
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
            </li>
          ))
        ) : (
          <p className="playlist__loading">Loading...</p>
        )}
      </ul>
    </div>
  );
};
