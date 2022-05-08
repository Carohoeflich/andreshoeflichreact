import * as React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Landing from "./components/Landing/landing.js";
import About from "./components/About/about.js";
import Music from "./components/Music/music";
import Photos from "./components/Photos/photos";
import Contact from "./components/Contact/contact";



function App() {
   return (
    <>
    <Nav></Nav>
    <Landing></Landing>
    <About></About>
    <Music></Music>
    <Photos></Photos>
    <Contact></Contact>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>

    </>
  );
}

export default App;