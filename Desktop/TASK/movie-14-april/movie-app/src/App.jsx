import "./App.css";
import React from "react";
import { MovieProvider } from "./Context/Context";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
