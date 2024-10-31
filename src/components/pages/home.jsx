import "../../styles/main-page.scss";
import "../../styles/home.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSongsfromGeneralPage,
  playTrack,
} from "../../redux/actions/allMusicActions";
import { Link } from "react-router-dom";
import { trackToggle } from "../../services/trackToggle.js";
import { TopSongGlobal } from "../sections/top-song-global.jsx";
import { TrackCard } from "../sections/track-card.jsx";
import { SVGComponentMain } from "../svgComponents.jsx";

const maxLengthArtist = 20; // Вкажи максимальну довжину тексту для імені виконавця
const maxLengthTrack = 20; // Вкажи максимальну довжину тексту для назви треку

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  }
  return text;
}

export const Home = () => {
  const dispatch = useDispatch();
  const popularArtists = useSelector(
    (state) => state.allMusic.generalPages.popularArtists
  );
  const topSongGlobal = useSelector(
    (state) => state.allMusic.generalPages.topSongGlobal
  );

  const trendingTracks = useSelector(
    (state) => state.allMusic.generalPages.trendingTracks
  );

  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack.trackUrl
  );
  const isPlaying = useSelector((state) => state.togglePlay);
  let trackUrl = null;
  let trackId = null;

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
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
        <ul className="section-content">
          {trendingTracks.slice(0, 4).map(({ track }) => {
            return (
              <TrackCard
                key={track.id}
                track={track}
                currentPlayingTrack={currentPlayingTrack}
                isPlaying={isPlaying}
                dispatch={dispatch}
                trackToggle={trackToggle}
                formatDuration={formatDuration}
              />
            );
          })}
        </ul>
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
                <Link to={`/artist/${artist.id}`}>
                  <img
                    className="artist-card__img"
                    src={artist.images[1].url}
                    alt="song"
                  />
                  <p>{artist.name}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <TopSongGlobal topSongGlobal={topSongGlobal} />
    </div>
  );
};
