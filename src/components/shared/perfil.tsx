import React from "react";

const Perfil: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      {/* Ícono del carrito */}
      <div className="relative">
        <i className="fas fa-shopping-cart text-2xl cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300"></i>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
          3
        </span>
      </div>

      {/* Ícono del perfil */}
      <i className="fas fa-user text-2xl cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300"></i>
    </div>
  );
};

export default Perfil;
