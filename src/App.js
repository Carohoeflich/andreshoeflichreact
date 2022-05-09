import * as React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Shoppage from "./pages/Shop";
import Login from "./pages/Login"



function App() {
   return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shoppage />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;