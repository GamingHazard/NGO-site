import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingImage from "./components/LandingImage";
import NavBar from "./components/NavBar";
import WriteUp from "./components/WriteUp";
import YoutubeVideo from "./components/YoutubeVideo";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevShowNav => !prevShowNav);
  };

  return (
    <BrowserRouter>
      <Header toggleNav={toggleNav} showNav={showNav} />
      {showNav && <NavBar />}
      <Routes>
        <Route path="/donate-to-make-a-change" element={<Donation />} />
        <Route path="/" element={
          <>
            <LandingImage />
            <WriteUp />
            <YoutubeVideo />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
