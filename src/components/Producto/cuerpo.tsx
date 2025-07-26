"use client";

import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase"; // Asegúrate de tener la ruta correcta
import { collection, getDocs } from "firebase/firestore";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
}

const CuerpoProductos = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productsList);
        setFilteredProducts(productsList);
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "Todos"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  return (
    <section className="overflow-hidden">
      <div className="relative h-screen bg-gradient-to-br from-blue-500 to-green-500 flex flex-col items-center justify-center text-white text-center px-6 py-16">
        <h1 className="text-6xl font-bold drop-shadow-lg">Productos</h1>
        <p className="text-xl mt-4 max-w-2xl drop-shadow-md">
          Explora nuestra variedad de productos de alta calidad.
        </p>
      </div>

      <div className="bg-gray-100 py-12 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          ¿Qué ofrecemos?
        </h2>
        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="py-3 px-4 text-lg bg-white border-2 border-blue-500 rounded-lg shadow-md hover:border-blue-700 transition duration-300"
          >
            <option value="Todos">Todos</option>
            <option value="Hogar">Hogar</option>
            <option value="Agricultura">Agricultura</option>
            <option value="Maquinaria">Maquinaria</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-sm text-blue-500 font-medium">
                  Categoría: {product.category}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hay productos disponibles.</p>
          )}
        </div>
      </div>

      <div className="relative h-80 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-center px-6 py-20">
        <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg max-w-xl">
          <h2 className="text-3xl font-bold mb-6">¡Contáctanos para más información!</h2>
          <button
            onClick={() => window.open("https://wa.me/56997869032", "_blank")}
            className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Contactar
          </button>
        </div>
      </div>

      <a
        href="https://wa.me/56997869032"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </section>
  );
};

export default CuerpoProductos;