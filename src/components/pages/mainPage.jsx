import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../../styles/main-page.scss";
import "../../styles/home.scss";
import { Header } from "../header/header";
import { SecondAside } from "../aside/secondAside";
import { Home } from "./home";
import { Artist } from "./artist";
import { Albums } from "./albums";
import { Podcast } from "./podcast";
import { Song } from "./song";

export const MainPage = () => {
  return (
    <main className="main-content">
      <Header />
      <div className="main-continer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song" element={<Song />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
        <SecondAside />
      </div>
    </main>
  );
};
