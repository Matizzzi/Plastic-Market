"use client";  // Declaración para indicar que es un Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { getAuth, signInWithEmailAndPassword, Auth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDauDRuyrDBvcYRDEgJRNvLitencmFr_1A",
  authDomain: "plasticmarket-1cd07.firebaseapp.com",
  projectId: "plasticmarket-1cd07",
  storageBucket: "plasticmarket-1cd07.appspot.com",
  messagingSenderId: "458790848814",
  appId: "1:458790848814:web:3acfb8a5d3eecf3e2d92bf",
  measurementId: "G-2X3B8D8BQ1",
};

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const app = initializeApp(firebaseConfig);
      setAuth(getAuth(app));
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
      setError("Firebase no se inicializó correctamente.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/create-product");  // Redirige a la página de creación de productos
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Correo o contraseña incorrectos.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar sesión como administrador</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-600">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Introduce tu correo"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-600">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Introduce tu contraseña"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
