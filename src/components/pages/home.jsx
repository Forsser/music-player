import "../../styles/main-page.scss";
import "../../styles/home.scss";
import { useEffect, useState } from "react";

export const Home = () => {
  useEffect = () => {};
  return (
    <div className="section-continer">
      <section className="section">
        <div className="section-title">
          <h2>Trending songs this week</h2>
          <a href="#">See all</a>
        </div>
        <div className="section-content">
          <article className="card">
            <img src="path_to_album_art" alt="Pink + White" />
            <p>Pink + White</p>
            <p>Frank Ocean</p>
          </article>
          <article className="card">
            <img src="path_to_album_art" alt="Yoru ni Kakeru" />
            <p>Yoru ni Kakeru</p>
            <p>Yoasobi</p>
          </article>
          <article className="card">
            <img src="path_to_album_art" alt="Syre" />
            <p>Syre</p>
            <p>Jaden</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section-title">
          <h2>Popular artists</h2>
          <a href="#">See all</a>
        </div>
        <div className="section-content">
          <article className="artist-card">
            <img src="path_to_artist_image" alt="JVKE" />
            <p>JVKE</p>
          </article>
          <article className="artist-card">
            <img src="path_to_artist_image" alt="The Weeknd" />
            <p>The Weeknd</p>
          </article>
          <article className="artist-card">
            <img src="path_to_artist_image" alt="Yeat" />
            <p>Yeat</p>
          </article>
          <article className="artist-card">
            <img src="path_to_artist_image" alt="Travis Scott" />
            <p>Travis Scott</p>
          </article>
          <article className="artist-card">
            <img src="path_to_artist_image" alt="Joji" />
            <p>Joji</p>
          </article>
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
