import React from "react";
import "animate.css";

const CuerpoSomos = () => {
  return (
    <section className="overflow-hidden font-sans">
      {/* Video Hero Section */}
      <div className="relative w-full h-[80vh] md:h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/videoOficial.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white animate__animated animate__fadeInDown drop-shadow-lg">
            Bienvenidos a <span className="text-green-400">PlasticMarket</span>
          </h1>
        </div>
      </div>

      {/* Quiénes Somos */}
      <div className="bg-gray-50 py-24 px-6 md:px-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 animate__animated animate__fadeInUp">
          ¿Quiénes <span className="text-green-500">Somos?</span>
        </h2>
        <p className="text-xl text-gray-700 leading-8 max-w-4xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          Creemos en un futuro donde la sostenibilidad y la innovación van de la mano.
        </p>
      </div>

      {/* Nuestra Historia */}
      <div className="bg-gradient-to-r from-green-200 via-blue-200 to-green-200 py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 animate__animated animate__fadeInUp">
          Nuestra Historia
        </h2>
        <p className="text-lg text-gray-800 leading-8 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          Desde el principio, nos comprometimos a brindar soluciones ecológicas y eficientes, 
          impulsando cambios positivos en nuestra comunidad y el medio ambiente.
        </p>
      </div>

      {/* Nuestra Visión */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-500 opacity-80"></div>
        <div className="relative bg-black bg-opacity-60 text-white p-12 rounded-xl shadow-2xl text-center max-w-xl animate__animated animate__zoomIn">
          <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">Nuestra Visión</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Inspiramos a empresas y personas a tomar decisiones responsables con el medio ambiente,
            promoviendo un mundo más limpio y sustentable para las futuras generaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CuerpoSomos;
