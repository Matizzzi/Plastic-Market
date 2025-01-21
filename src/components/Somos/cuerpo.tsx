import React from "react";

const CuerpoSomos = () => {
  return (
    <section className="overflow-hidden">
      {/* Primera sección con gradiente animado */}
      <div
        className="relative h-screen text-white flex items-center justify-center"
        style={{
          background: "linear-gradient(120deg, #32CD32, #1E90FF, #00CED1)",
          backgroundSize: "300% 300%",
          animation: "gradientAnimation 10s ease infinite",
        }}
      >
        <div className="text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-md">
            ¿Quiénes Somos?
          </h1>
          <p className="text-lg md:text-xl mt-4 drop-shadow-sm">
            Comprometidos con el cambio, liderando el camino hacia un futuro más sostenible.
          </p>
        </div>
      </div>

      {/* Segunda sección con contenido */}
      <div className="bg-gradient-to-b from-green-100 to-blue-100 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Nuestra Historia
        </h2>
        <p className="text-lg text-gray-600 leading-8 text-justify max-w-3xl mx-auto">
          Desde nuestros inicios, hemos trabajado para ofrecer soluciones innovadoras que impacten
          positivamente en el medio ambiente y en nuestra comunidad. Nuestra misión es ser un
          puente hacia un mundo más verde, donde cada acción cuenta para construir un planeta
          sostenible.
        </p>
      </div>

      {/* Segunda sección con gradiente animado */}
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(120deg, #1E90FF, #32CD32, #00CED1)",
          backgroundSize: "300% 300%",
          animation: "gradientAnimation 10s ease infinite",
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-10 rounded-lg shadow-lg text-center max-w-lg">
          <h3 className="text-3xl font-bold mb-4 drop-shadow-md">
            Nuestra Visión
          </h3>
          <p className="text-lg leading-relaxed drop-shadow-sm">
            Inspirar a las personas y las organizaciones a tomar decisiones responsables con el
            medio ambiente y a contribuir activamente a la construcción de un mundo mejor.
          </p>
        </div>
      </div>

      {/* Última sección */}
      <div className="bg-gradient-to-t from-green-100 to-blue-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Únete a Nosotros
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-8 mb-8">
          Sé parte de este cambio y descubre cómo puedes colaborar con nuestra causa. Cada acción,
          por pequeña que sea, nos acerca más a un mundo mejor.
        </p>
        <button className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transform transition-transform duration-300">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default CuerpoSomos;
