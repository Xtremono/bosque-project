import React from 'react';
// Si vas a usar un archivo CSS aparte para el componente, impórtalo aquí:
// import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <div className="container mt-4">
        {/* Contenedor principal para posicionamiento relativo */}
        <div className="image-container position-relative">
          {/* Usa tu clase CSS existente para la imagen */}
          <img src="/src/assets/vista.jpg" alt="vista" className="imagen-responsive" />

          {/* Contenedor del texto superpuesto: Flexbox para centrado */}
          <div className="overlay-text d-flex flex-column justify-content-center align-items-center">
            {/* Título principal */}
            <h1 className="text-white text-center main-title">Pies en el Bosque</h1>

            {/* Subtítulo h2 con Lorem Ipsum */}
            <h2 className="text-white text-center overlay-h2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>

            {/* Párrafo con Lorem Ipsum más largo */}
            <p className="text-white text-center overlay-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
