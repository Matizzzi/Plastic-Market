import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase"; // Asegúrate de tener la ruta correcta
import { collection, getDocs } from "firebase/firestore";

// Define el tipo para un producto
interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
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
            <div className="absolute right-0 top-0 mt-3 mr-4 text-blue-500 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
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
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {product.title}
                </h3>
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
          <button className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuerpoProductos;
  