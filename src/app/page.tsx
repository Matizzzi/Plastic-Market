import React from "react";
import Header from "../components/shared/header";

const Page: React.FC = () => {
  return (
    <div className="relative">
      {/* Fondo con burbujas */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-300 via-teal-300 to-green-300 animate-moveBubbles">
          {/* Aquí puedes colocar las burbujas en movimiento utilizando pseudo-elementos o svg */}
        </div>
      </div>

      {/* Contenido principal */}
      <Header />
      <main className="pt-16">
        <h1 className="text-center text-3xl font-bold text-gray-800 mt-8">
          Bienvenido a Market
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Explora nuestros servicios y productos.
        </p>
      </main>
    </div>
  );
};

export default Page;
