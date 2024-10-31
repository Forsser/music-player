import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../styles/song.scss";
import {
  getSongs,
  getPlaylistByCategories,
} from "../../redux/actions/songActions.js";

import { getSongsfromGeneralPage } from "../../redux/actions/allMusicActions.js";
import { TrackToggle } from "./song-track-toggle.jsx";

export const Song = memo(() => {
  const dispatch = useDispatch();
  const trendingTracks = useSelector(
    (state) => state.allMusic.generalPages.trendingTracks
  );

  const currentPlayingTrack = useSelector(
    (state) => state.allMusic.currentTrack
  );

  const songCatigories = useSelector(
    (state) => state.allMusic.song.songsCategories
  );

  const previewTrack = trendingTracks.filter((track) => {
    return track.track.preview_url !== null;
  });

  const formatDuration = (durationMs) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    dispatch(getSongs());
    dispatch(getSongsfromGeneralPage());
  }, [dispatch]);

  return (
    <div className="section-continer">
      <div className="section-track-wrapper">
        <h2>Trending songs this week</h2>
        <h3>Song Categories: </h3>
        <table className="trending-songs__table">
          <thead className="trending-songs__thead">
            <tr className="trending-songs__row">
              <th className="trending-songs__column trending-songs__column--song">
                Song
              </th>
              <th className="trending-songs__column trending-songs__column--artist">
                Artist
              </th>
              <th className="trending-songs__column trending-songs__column--album">
                Album
              </th>
              <th className="trending-songs__column trending-songs__column--times">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="trending-songs__tbody">
            {previewTrack.map(({ track }) => (
              <tr
                className={`trending-songs__row ${
                  currentPlayingTrack === track.preview_url
                    ? "trending-songs__row--active"
                    : ""
                }`}
                key={track.id}
              >
                <td className="trending-songs__cell trending-songs__cell--song">
                  <TrackToggle track={track} />
                </td>
                <td className="trending-songs__cell trending-songs__cell--artist">
                  <Link to={`/artist/${track.artists[0].id}`}>
                    {track.artists[0].name}
                  </Link>
                </td>
                <td className="trending-songs__cell trending-songs__cell--album">
                  <a href="#">{track.album.name}</a>
                </td>
                <td className="trending-songs__cell trending-songs__cell--time">
                  {formatDuration(track.duration_ms)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <section>
          <div className="categories-continer">
            <h2>Song Categories</h2>
            <ul className="categories-list">
              {songCatigories.map((categories) => {
                return (
                  <Link
                    to={"/playlist"}
                    className="categories-item"
                    key={categories.id}
                    onClick={() =>
                      dispatch(getPlaylistByCategories(categories.id))
                    }
                  >
                    <img
                      width={150}
                      src={categories.icons[0].url}
                      alt="Song Categories"
                    />
                    <p>{categories.name}</p>
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
});
