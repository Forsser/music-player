import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainAside } from "./components/aside/mainAside";
import { Header } from "./components/header/header";
import { MainPage } from "./components/pages/mainPage";
import { SecondAside } from "./components/aside/secondAside";
import Player from "./components/player";
import { useSelector } from "react-redux";

function App() {
  const trackUrl = useSelector((state) => state.allMusic.currentTrack.trackUrl);

  return (
    <Router>
      <div className="wrapper">
        <Player trackUri={trackUrl} />
        <MainAside />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
