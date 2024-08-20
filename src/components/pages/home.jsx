import "../../styles/main-page.scss";
import "../../styles/home.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSongsfromGeneralPage,
  playTrack,
} from "../../redux/actions/allMusicActions";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const popularArtists = useSelector(
    (state) => state.allMusic.generalPages.popularArtists
  );
  const trendingTracks = useSelector(
    (state) => state.allMusic.generalPages.trendingTracks
  );

  console.log(trendingTracks);

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleArtist = (artistId) => {
    return artistId;
  };

  useEffect(() => {
    dispatch(getSongsfromGeneralPage());
  }, [dispatch]);

  return (
    <div className="section-continer">
      <section className="section">
        <div className="section-title">
          <h2>Trending songs this week</h2>
          <Link to="/song">See all</Link>
        </div>
        <div className="section-content">
          {trendingTracks.slice(0, 3).map(({ track }) => {
            return (
              <article
                onClick={() =>
                  playTrack({
                    trackUrl: track.track.preview_url,
                    trackId: track.track.id,
                  })
                }
                className="card"
              >
                <img
                  className="card__img"
                  src={track.album.images[1].url}
                  alt="song"
                />
                <div className="card__text">
                  <Link
                    to={`/artist/${track.artists[0].id}`}
                    className="card__text--hover"
                  >
                    {track.artists[0].name}
                  </Link>
                  <div className="card__text__item">
                    <p>{track.name}</p>
                    <p>{formatDuration(track.duration_ms)}</p>
                  </div>
                </div>
                <button
                  className="card__button"
                  onClick={handleArtist()}
                ></button>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section">
        <div className="section-title">
          <h2>Popular artists</h2>
          <a href="#">See all</a>
        </div>
        <div className="section-content section-content__artist">
          {popularArtists.map((artist) => {
            return (
              <article key={artist.id} className="artist-card">
                <img
                  className="artist-card__img"
                  src={artist.images[1].url}
                  alt="song"
                />
                <p>{artist.name}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section">
        <div className="section-title">
          <h2>Recently played</h2>
          <a href="#">See all</a>
        </div>
        <div className="section-content">
          <article className="card">
            <img src="path_to_album_art" alt="Trance" />
            <p>Trance</p>
            <p>Metro Boomin, Travis Scott, Young Thug</p>
          </article>
          <article className="card">
            <img src="path_to_album_art" alt="Look at the Sky" />
            <p>Look at the Sky</p>
            <p>Porter Robinson</p>
          </article>
        </div>
      </section>
    </div>
  );
};
