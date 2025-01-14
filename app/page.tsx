/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="scroll-smooth">
      {/* Sección inicial */}
      <section className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col md:flex-row items-center">
          {/* Frase llamativa */}
          <div className="text-white space-y-6 md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              "Reciclar para un futuro mejor&quot; <br />
              <span className="text-yellow-400">Plastic Market</span>
            </h1>
            <p className="text-lg md:text-xl">
              Un mundo más limpio comienza con pequeños cambios.
            </p>
          </div>
          {/* Imagen */}
          <div className="mt-8 md:mt-0 md:ml-8">
            <Image
              src="/images/fondo.png"
              alt="Reciclaje"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Botón de búsqueda */}
        <div className="mt-12">
          <input
            type="text"
            placeholder="Buscar productos o categorías..."
            className="px-4 py-2 w-72 rounded-l-md border-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="px-4 py-2 bg-yellow-400 text-white font-bold rounded-r-md hover:bg-yellow-500 transition-all duration-300">
            Buscar
          </button>
        </div>
      </section>

      {/* Sala de ventas */}
      <section id="ventas" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Productos disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {/* Aquí se mostrarán los productos */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <Image
                src="/images/fondo.png"
                alt="Producto"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Producto 1
              </h3>
              <p className="text-gray-600 mt-2">$10.00</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
            {/* Repetir este bloque para más productos */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
