import React from "react";

const CuerpoProductos = () => {
  return (
    <section className="overflow-hidden">
      {/* Sección inicial con gradiente animado */}
      <div
        className="relative h-screen text-white flex flex-col items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(120deg, #32CD32, #1E90FF, #00CED1)",
          backgroundSize: "300% 300%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-lg">
          Productos
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
          Descubre nuestra variedad de productos de alta calidad, sin precios, solo detalles y fotos.
        </p>
      </div>

      {/* Sección con lista de productos */}
      <div className="bg-gradient-to-b from-green-100 to-blue-100 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          ¿Qué ofrecemos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[ 
            { 
              title: "Producto 1", 
              description: "Descripción breve del producto 1.", 
              image: "/img/tablas.png" 
            },
            { title: "Producto 2", description: "Descripción breve del producto 2.", image: "/img/gato.jpg" },
            { title: "Producto 3", description: "Descripción breve del producto 3.", image: "/img/gato.jpg" },
            { title: "Producto 4", description: "Descripción breve del producto 4.", image: "/img/gato.jpg" },
            { title: "Producto 5", description: "Descripción breve del producto 5.", image: "/img/gato.jpg" },
            { title: "Producto 6", description: "Descripción breve del producto 6.", image: "/img/gato.jpg" },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección final con CTA */}
      <div
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(120deg, #1E90FF, #32CD32, #00CED1)",
          backgroundSize: "300% 300%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      >
        <div className="bg-black bg-opacity-50 text-white p-10 rounded-lg shadow-lg max-w-xl">
          <h2 className="text-3xl font-bold mb-6">
            ¡Contáctanos para más información!
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Obtén más detalles sobre nuestros productos y cómo pueden mejorar tu experiencia.
          </p>
          <button className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuerpoProductos;
