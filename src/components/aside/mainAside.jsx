import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../../styles/aside.scss";
import { SVGComponent } from "../svgComponents";
import "../../styles/svg/symbol-defs.svg";

export const MainAside = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav-container">
        <div className="sidebar__nav-svg-container">
          <SVGComponent icon={"home"} />
          <NavLink
            to="/"
            className="sidebar__nav-item sidebar__nav-item--active"
          >
            Home
          </NavLink>
        </div>
        <div className="sidebar__nav-svg-container">
          <SVGComponent icon={"circle-full"} />
          <NavLink to="song" className="sidebar__nav-item">
            Songs
          </NavLink>
        </div>
        <div className="sidebar__nav-svg-container">
          <SVGComponent icon={"circle-full"} />
          <NavLink to="artist" className="sidebar__nav-item">
            Artists
          </NavLink>
        </div>
        <div className="sidebar__nav-svg-container">
          <SVGComponent icon={"circle"} />
          <NavLink to="albums" className="sidebar__nav-item">
            Albums
          </NavLink>
        </div>
        <div className="sidebar__nav-svg-container">
          <SVGComponent icon={"circle-full"} />
          <NavLink to="podcast" className="sidebar__nav-item">
            Podcast
          </NavLink>
        </div>
      </nav>
      <span className="sidebar__nav-line"></span>
      <section className="collections">
        <div className="collections__title">
          <SVGComponent icon={"collection"} />
          <h2>Your Collections</h2>
          <button type="submit">+</button>
        </div>
        <ul className="collections__continer">
          <li className="collection-item">
            <img src="path_to_image" alt="Eve" />
            <span>Eve</span>
          </li>
          <li className="collection-item">
            <img src="path_to_image" alt="Yoasobi" />
            <span>Yoasobi</span>
          </li>
          <li className="collection-item">
            <img src="path_to_image" alt="Study lofi" />
            <span>Study lofi</span>
          </li>
          <li className="collection-item">
            <img src="path_to_image" alt="Coffee Chill" />
            <span>Coffee Chill</span>
          </li>
          <li className="collection-item">
            <img src="path_to_image" alt="Anime lofi" />
            <span>Anime lofi</span>
          </li>
          <li className="collection-item">
            <img src="path_to_image" alt="Ghibli Vibes" />
            <span>Ghibli Vibes</span>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default MainAside;
