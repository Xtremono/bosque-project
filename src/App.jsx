import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Proyecto from "./pages/Proyecto";
import Galeria from "./pages/Galeria";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
