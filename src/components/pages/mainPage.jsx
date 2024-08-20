import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles/main-page.scss";
import "../../styles/home.scss";
import { Header } from "../header/header";
import { SecondAside } from "../aside/secondAside";
import { Home } from "./home";
import { Albums } from "./albums";
import { Podcast } from "./podcast";
import { Song } from "./song";
import { ArtistById } from "./artist-by-id";

export const MainPage = () => {
  return (
    <main className="main-content">
      <Header />
      <div className="main-continer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song" element={<Song />} />
          <Route path="/artist/:id" element={<ArtistById />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
        <SecondAside />
      </div>
    </main>
  );
};
