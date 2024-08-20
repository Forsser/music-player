import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainAside } from "./components/aside/mainAside";
import { Header } from "./components/header/header";
import { MainPage } from "./components/pages/mainPage";
import { SecondAside } from "./components/aside/secondAside";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <MainAside />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
