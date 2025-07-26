"use client";

import React from "react";
import Image from "next/image";

// Definir la interfaz del producto
interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

// Lista de productos predefinidos
const productos: Producto[] = [
  {
    id: "1",
    nombre: "TABLAS PARA COCINA Y ESCRITORIO",
    descripcion: "Tablas versátiles ideales para cocina y escritorio, diseñadas para ofrecer funcionalidad y estilo.",
    imagen: "/img/tablas.png",
  },
  {
    id: "2",
    nombre: "SEMILLERO PLASTICO",
    descripcion: "Semillero plástico práctico y ligero, ideal para iniciar el crecimiento de plantas y cultivos.",
    imagen: "/img/image (5) (1).png",
  },
  {
    id: "3",
    nombre: "CINTAS PLASTICAS PARA CIERRES PERIMETRALES",
    descripcion: "Las cintas plásticas para cierres perimetrales son fáciles de usar, resistentes y perfectas para delimitar espacios de manera rápida y visible.",
    imagen: "/img/image (6) (1).png",
  },
];

// Componente de tarjeta de producto
const ProductoCard: React.FC<Producto> = ({ nombre, descripcion, imagen }) => (
  <div className="producto-item bg-white rounded-2xl shadow-lg w-80 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
    <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
      {imagen ? (
        <Image
          src={imagen}
          alt={nombre}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
          No hay imagen disponible
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">{nombre}</h3>
      <p className="text-gray-600 text-sm">{descripcion}</p>
    </div>
  </div>
);

// Componente principal que lista los productos
const Productos = () => {
  return (
    <section className="productos-section relative py-20 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90 z-[-1]"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-white text-5xl font-extrabold mb-12 tracking-tight uppercase">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
