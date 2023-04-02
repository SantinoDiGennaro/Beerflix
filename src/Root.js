import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { CreazioneBox } from "./components/CreazioneBox/CreazioneBox";
import { Carousel } from "./components/CreazioneBox/Carousel";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="selection" element={<CreazioneBox />} />
        <Route path="carousel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}
