import React from "react";

import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favroites from "./Pages/Favroites";
import NavBar from "../NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favroites" element={<Favroites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
