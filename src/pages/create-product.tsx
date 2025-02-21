"use client";

import React, { useState, useEffect } from "react";
import { db } from "@modal/firebase"; // Verifica la ruta
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Define la estructura del Producto con un array para las imágenes
interface Product {
  id: string;
  title: string;
  description: string;
  images: string[]; // Aseguramos que 'images' sea un array de strings
  category: string;
}

const CreateProduct = () => {
  // Estado para los datos del producto
  const [product, setProduct] = useState({
    title: "",
    description: "",
    images: ["", "", ""], // Inicializamos 'images' como un array vacío
    category: "Hogar",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Función para agregar un nuevo producto
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), product);
      setProduct({ title: "", description: "", images: ["", "", ""], category: "Hogar" }); // Resetear el producto
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      fetchProducts(); // Actualizar la lista después de agregar el producto
    } catch (error: unknown) {
      console.error("Error al agregar el producto:", error);
      setError("Error al agregar el producto. Inténtalo de nuevo.");
      setTimeout(() => setError(""), 3000);
    }
  };

  // Función para obtener todos los productos
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        images: doc.data().images || [],  // Asegúrate de que 'images' sea siempre un array
        ...doc.data(),
      })) as Product[];
      setProducts(productsList);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Función para eliminar un producto
  const deleteProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      fetchProducts(); // Actualizar la lista después de eliminar el producto
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  // Función para editar un producto
  const handleEditProduct = (productId: string) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setProduct({
        title: productToEdit.title,
        description: productToEdit.description,
        images: productToEdit.images,
        category: productToEdit.category,
      });
      setEditingProductId(productId); // Establecemos el producto en modo de edición
    }
  };

  // Función para actualizar un producto en Firebase
  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProductId) {
      try {
        const productRef = doc(db, "products", editingProductId);
        await updateDoc(productRef, product); // Actualizamos el producto
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setEditingProductId(null); // Limpiamos el estado de edición
        setProduct({ title: "", description: "", images: ["", "", ""], category: "Hogar" });
        fetchProducts(); // Actualizamos la lista de productos después de la edición
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
        setError("Error al actualizar el producto. Inténtalo de nuevo.");
        setTimeout(() => setError(""), 3000);
      }
    }
  };

  // Efecto para cargar los productos al cargar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{editingProductId ? "Editar Producto" : "Agregar Producto"}</h2>
      <form onSubmit={editingProductId ? handleUpdateProduct : handleAddProduct} className="space-y-4">
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
        {/* Campos para imágenes */}
        {product.images.map((image, index) => (
          <input
            key={index}
            type="text"
            value={image}
            onChange={(e) => {
              const updatedImages = [...product.images];
              updatedImages[index] = e.target.value;
              setProduct({ ...product, images: updatedImages });
            }}
            placeholder={`Imagen ${index + 1}`}
            className="w-full p-2 border rounded"
          />
        ))}
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
          {editingProductId ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </form>
      {success && <p className="text-green-500 mt-4">Producto {editingProductId ? "actualizado" : "agregado"} con éxito.</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Dashboard para mostrar productos */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Dashboard de Productos</h3>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                {/* Mostrar las imágenes del producto */}
                {product.images && Array.isArray(product.images) && product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Imagen ${index + 1} de ${product.title}`}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                  ))
                ) : (
                  <p>No hay imágenes disponibles.</p>
                )}
                <h4 className="text-lg font-semibold">{product.title}</h4>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-sm text-blue-500 font-medium mt-2">Categoría: {product.category}</p>
                <button
                  onClick={() => handleEditProduct(product.id)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mt-4"
                >
                  Editar
                </button>
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
