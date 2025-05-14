import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import '../App.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <img src={logo} alt="Logo Pies en el Bosque" className="animated-logo mb-4" />
      <p className="splash-subtitle mt-3">Conectando con la naturaleza...</p>
    </div>
  );
};

export default SplashScreen;
