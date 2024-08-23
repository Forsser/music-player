import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtistById } from "../../redux/actions/artistsActions";
import "../../styles/artist-by-id.scss";
import Svg from "../../styles/svg/symbol-defs.svg";

export const ArtistById = () => {
  const { id } = useParams();
  const { artist, artistTracks } = useSelector(
    (state) => state.allMusic.artist.artistById
  );
  console.log(artistTracks);
  const dispatch = useDispatch();
  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    dispatch(getArtistById(id));
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }
  return (
    <div className="section-continer">
      <div className="artist">
        <div className="artist__header">
          <div class="artist__image-wrapper">
            <img
              src={artist.images[0].url}
              className="artist__image"
              alt={`${artist.name}`}
            />

            <h1 className="artist__name">{artist.name}</h1>
            <div className="artist__buttons">
              <button className="artist__button artist__button--play">
                <svg width="40" height="40" fill={"#dbdbdbf8"}>
                  <use href={Svg + `#play`}></use>
                </svg>
              </button>
              <button className="artist__button artist__button--add">
                Add to Collections
              </button>
            </div>
          </div>
        </div>
        <div className="artist__tracks">
          <ul className="artist__track-list">
            {artistTracks.tracks.map((track) => (
              <li className="artist__track-item" key={track.id}>
                <div className="artist__track">
                  <img
                    className="artist__track-images"
                    src={track.album.images[2].url}
                    alt=""
                  />
                  <p className="artist__track-name">{track.name}</p>
                  <p className="artist__track-album">{track.album.name}</p>
                  <p className="artist__track-duration">
                    {formatDuration(track.duration_ms)}
                  </p>
                  <button className="artist__track-button artist__button--add-track">
                    <b>
                      {" "}
                      <svg width="30" height="30" fill={"#fffffff8"}>
                        <use href={Svg + `#format_list`}></use>
                      </svg>
                    </b>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};