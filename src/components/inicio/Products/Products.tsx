"use client";

import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase";
import { collection, getDocs } from "firebase/firestore";

// Definir la interfaz del producto
interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const ProductoCard: React.FC<Producto> = ({ nombre, descripcion, imagen }) => (
  <div className="producto-item bg-white rounded-lg shadow-xl w-80 overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
    <div className="relative w-full h-72 overflow-hidden rounded-t-lg">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl text-gray-800 font-semibold mb-2">{nombre}</h3>
      <p className="text-gray-600 mb-4">{descripcion}</p>
    </div>
  </div>
);

const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productosList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().title,
          descripcion: doc.data().description,
          imagen: doc.data().image,
        })) as Producto[];
        setProductos(productosList);
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <section className="productos-section relative py-16 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90 z-[-1]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-white text-5xl font-extrabold mb-12 tracking-tight">
          Productos Destacados
        </h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {productos.length > 0 ? (
            productos.map((producto) => <ProductoCard key={producto.id} {...producto} />)
          ) : (
            <p className="text-white text-xl">Cargando productos...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Productos;