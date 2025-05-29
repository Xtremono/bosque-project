// src/App.jsx
import './App.css';
import React, { useEffect, useState } from 'react'; // <--- ASEGÚRATE DE IMPORTAR useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';       // <--- IMPORTAR AOS
import 'aos/dist/aos.css'; // <--- IMPORTAR ESTILOS DE AOS

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

  // <--- AÑADIR ESTE BLOQUE useEffect PARA INICIALIZAR AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación (en milisegundos)
      once: true,    // Si la animación debe ocurrir solo una vez por elemento
    });
  }, []); // Array vacío para que se ejecute solo una vez al montar la app
  // <--- FIN DEL BLOQUE useEffect

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
