import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Guardian from "./pages/Guardian";
import Galeria from "./pages/Galeria";
import Pies from "./pages/Pies";
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/guardian" element={<Guardian />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/pies" element={<Pies />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
