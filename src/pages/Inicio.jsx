// src/pages/Inicio.jsx
import React from 'react';
// Asegúrate de que si tienes un archivo CSS para Inicio, lo importes
// import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="image-container position-relative">
          <img src="/src/assets/vista.jpg" alt="vista" className="imagen-responsive" />

          <div className="overlay-text d-flex flex-column justify-content-center align-items-center">
            {/* h1 viene de arriba */}
            <h1
              className="text-white text-center main-title"
              data-aos="fade-down" // <--- AÑADIR ESTE ATRIBUTO
              data-aos-delay="200" // <--- Y ESTE (opcional, para retraso)
            >
              Pies en el Bosque
            </h1>

            {/* h2 viene de abajo */}
            <h2
              className="text-white text-center overlay-h2"
              data-aos="fade-up" // <--- AÑADIR ESTE ATRIBUTO
              data-aos-delay="400" // <--- Y ESTE (opcional)
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>

            {/* p viene de abajo */}
            <p
              className="text-white text-center overlay-p"
              data-aos="fade-up" // <--- AÑADIR ESTE ATRIBUTO
              data-aos-delay="600" // <--- Y ESTE (opcional)
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
