import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { MoiveProvider } from "./Context/MovieContext";

function App() {
  return (
    <MoiveProvider>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MoiveProvider>
  );
}

export default App;
