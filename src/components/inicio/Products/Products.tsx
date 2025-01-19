"use client";

import React from "react";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  enlace: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Una breve descripción del producto aquí.",
    imagen: "https://via.placeholder.com/400x300",
    enlace: "#",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción rápida del producto.",
    imagen: "https://via.placeholder.com/400x300",
    enlace: "#",
  },
];

const ProductoCard: React.FC<Producto> = ({ nombre, descripcion, imagen, enlace }) => (
  <div className="producto-item bg-white rounded-lg shadow-lg w-72 overflow-hidden transform transition-all hover:scale-105">
    <div className="relative w-full h-72 overflow-hidden rounded-t-lg">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl text-gray-800 font-semibold mb-2">{nombre}</h3>
      <p className="text-gray-600 mb-4">{descripcion}</p>
      <a
        href={enlace}
        className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-indigo-700 hover:to-blue-600"
        aria-label={`Ver detalles de ${nombre}`}
      >
        Ver Detalles
      </a>
    </div>
  </div>
);

const Productos = () => {
  return (
    <section className="productos-section relative py-16 bg-gray-900">
      {/* Fondo Parallax */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-80 z-[-1]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-white text-5xl font-extrabold mb-12 tracking-tight">
          Nuestros Productos
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
