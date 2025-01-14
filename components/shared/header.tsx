import React from "react";
import Logo from "./logo";
import Perfil from "./perfil";

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 w-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg py-4 px-6 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden md:flex space-x-8">
          <section className="cursor-pointer text-white font-semibold hover:text-yellow-400 transition-all duration-300 hover:scale-105">
            Home
          </section>
          <section className="cursor-pointer text-white font-semibold hover:text-yellow-400 transition-all duration-300 hover:scale-105">
            Plástico
          </section>
          <section className="cursor-pointer text-white font-semibold hover:text-yellow-400 transition-all duration-300 hover:scale-105">
            Vidrio
          </section>
          <section className="cursor-pointer text-white font-semibold hover:text-yellow-400 transition-all duration-300 hover:scale-105">
            Papel
          </section>
        </div>

        {/* Perfil y carrito */}
        <Perfil />
      </div>
    </header>
  );
};

export default Header;
