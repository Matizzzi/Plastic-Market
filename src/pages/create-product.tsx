"use client";

import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase"; // Verifica la ruta
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// El resto del código sigue igual


interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const CreateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    category: "Hogar",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), product);
      setProduct({ title: "", description: "", image: "", category: "Hogar" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      fetchProducts(); // Actualizar la lista después de agregar el producto
    } catch (error: unknown) {
      console.error("Error al agregar el producto:", error);
      setError("Error al agregar el producto. Inténtalo de nuevo.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productsList);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      fetchProducts(); // Actualizar la lista después de eliminar el producto
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          placeholder="Título"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          placeholder="Descripción"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          placeholder="Imagen URL"
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Hogar">Hogar</option>
          <option value="Agricultura">Agricultura</option>
          <option value="Maquinaria">Maquinaria</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Agregar Producto
        </button>
      </form>
      {success && <p className="text-green-500 mt-4">Producto agregado con éxito.</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Dashboard para mostrar productos */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Dashboard de Productos</h3>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h4 className="text-lg font-semibold">{product.title}</h4>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-sm text-blue-500 font-medium mt-2">Categoría: {product.category}</p>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mt-4"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
