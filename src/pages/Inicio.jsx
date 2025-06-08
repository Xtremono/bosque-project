// src/pages/Inicio.jsx
import React from 'react';
import '../App.css'; // ¡CAMBIO AQUÍ! Importamos App.css en lugar de Inicio.css

const Inicio = () => {
  return (
    <>
      {/* Este div es clave para controlar que la imagen ocupe todo el ancho de la pantalla */}
      <div className="full-width-image-wrapper">
        <div className="image-container position-relative">
          {/* La imagen que quieres que ocupe todo el ancho */}
          <img src="/src/assets/vista.jpg" alt="vista" className="imagen-responsive" />

          {/* El contenedor del texto superpuesto */}
          <div className="overlay-text d-flex flex-column justify-content-center align-items-center">
            {/* Título principal animado con AOS */}
            <h1
              className="text-white text-center main-title"
              data-aos="fade-down" // Atributo para la animación de AOS
              data-aos-delay="200" // Retraso de la animación
            >
              Pies en el Bosque
            </h1>

            {/* Subtítulo animado con AOS */}
            <h2
              className="text-white text-center overlay-h2"
              data-aos="fade-up" // Atributo para la animación de AOS
              data-aos-delay="400" // Retraso de la animación
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>

            {/* Párrafo animado con AOS */}
            <p
              className="text-white text-center overlay-p"
              data-aos="fade-up" // Atributo para la animación de AOS
              data-aos-delay="600" // Retraso de la animación
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      {/* Aquí podrías añadir el resto del contenido de tu página si es necesario */}
    </>
  );
};

export default Inicio;
