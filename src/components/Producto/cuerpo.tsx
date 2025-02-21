"use client";

import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase"; // Asegúrate de tener la ruta correcta
import { collection, getDocs } from "firebase/firestore";
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp
import Image from "next/image"; // Para optimizar la carga de imágenes

// Define el tipo para un producto
interface Product {
  id: string;
  title: string;
  description: string;
  images: string[]; // Ahora cada producto tiene un array de imágenes
  category: string; // Agregamos la categoría al tipo Product
}

const CuerpoProductos = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Obtener productos desde Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productsList);
        setFilteredProducts(productsList); // Inicialmente muestra todos los productos
      } catch (error) {
        console.error("Error al obtener productos: ", error);
      }
    };
    fetchProducts();
  }, []);

  // Filtrar productos por categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Lógica para cambiar la imagen mostrada
  const handleImageChange = (productId: string, direction: string) => {
    setFilteredProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newIndex =
            direction === "next"
              ? (product.images.indexOf(product.images[0]) + 1) % product.images.length
              : (product.images.indexOf(product.images[0]) - 1 + product.images.length) % product.images.length;
          const updatedProduct = { ...product, images: product.images };
          updatedProduct.images[0] = product.images[newIndex];
          return updatedProduct;
        }
        return product;
      })
    );
  };

  return (
    <section className="overflow-hidden">
      {/* Sección inicial con gradiente animado */}
      <div
        className="relative h-screen text-white flex flex-col items-center justify-center text-center px-6 py-16"
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
          Explora nuestra variedad de productos de alta calidad, sin precios, solo detalles y fotos.
        </p>
      </div>

      {/* Filtro por categoría */}
      <div className="bg-gradient-to-b from-green-100 to-blue-100 py-12 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          ¿Qué ofrecemos?
        </h2>
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block w-64">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-full py-3 px-4 text-lg bg-white border-2 border-blue-500 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-700 transition duration-300"
            >
              <option value="Todos">Todos</option>
              <option value="Hogar">Hogar</option>
              <option value="Agricultura">Agricultura</option>
              <option value="Maquinaria">Maquinaria</option>
            </select>
          </div>
        </div>

        {/* Lista de productos filtrados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={product.images[0].trimStart()} // Elimina espacios al principio de la URL
                    alt={product.title}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  {/* Botones para cambiar la imagen */}
                  <button
                    onClick={() => handleImageChange(product.id, "prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={() => handleImageChange(product.id, "next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
                  >
                    &#10095;
                  </button>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <p className="text-sm text-blue-500 font-medium mt-2">
                  Categoría: {product.category}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hay productos disponibles en esta categoría.</p>
          )}
        </div>
      </div>

      {/* Sección final con CTA */}
      <div
        className="relative h-screen flex items-center justify-center text-center px-6 py-20"
        style={{
          background: "linear-gradient(120deg, #1E90FF, #32CD32, #00CED1)",
          backgroundSize: "300% 300%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      >
        <div className="bg-black bg-opacity-60 text-white p-10 rounded-lg shadow-lg max-w-xl transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6">¡Contáctanos para más información!</h2>
          <p className="text-lg leading-relaxed mb-6">
            Obtén más detalles sobre nuestros productos y cómo pueden mejorar tu experiencia.
          </p>
          <button
            onClick={() => window.open("https://wa.me/56997869032", "_blank")}
            className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
          >
            Contactar
          </button>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
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
