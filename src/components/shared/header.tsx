"use client";  // Indica que este componente debe ser tratado como un componente del cliente.

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Usa el Link de Next.js
import Logo from "./logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full ${isScrolled ? "bg-white shadow-2xl" : "bg-transparent"} transition-all duration-300 py-8 px-16 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-6">
          <Logo />
          <span
            className={`text-5xl font-extrabold ${isScrolled ? "text-gray-900" : "text-white"} tracking-tight transition-all duration-300`}
          >
            Market<sup>®</sup>
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav
          className={`hidden md:flex items-center space-x-14 font-semibold ${isScrolled ? "text-gray-900" : "text-white"} transition-all duration-300`}
        >
          <Link href="/somos" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110 text-xl">Quiénes somos</Link>
          <Link href="/servicios" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110 text-xl">Servicios</Link>
          <Link href="/productos" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110 text-xl">Productos</Link>
          <Link href="/red-reciclaje" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110 text-xl">Impacto</Link>
          <Link href="/contacto" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110 text-xl">Contáctanos</Link>
        </nav>

        {/* Botón de Ofertas */}
        <button
          className={`hidden md:block ${isScrolled ? "bg-gradient-to-r from-green-500 to-green-600 text-white" : "bg-white text-green-500"} py-4 px-10 rounded-full shadow-2xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 text-lg font-semibold transform hover:scale-110`}
        >
          Recibe Ofertas
        </button>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? "text-gray-900" : "text-white"} hover:text-green-600 transition-all duration-300 transform hover:scale-110`}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl rounded-lg mt-4 p-8 animate-fade-in transition-all duration-300">
          <Link href="/quienes-somos" className="block text-gray-900 font-semibold py-4 hover:text-green-500 transform transition-all duration-300 hover:scale-110 text-lg">Quiénes somos</Link>
          <Link href="/servicios" className="block text-gray-900 font-semibold py-4 hover:text-green-500 transform transition-all duration-300 hover:scale-110 text-lg">Servicios</Link>
          <Link href="/productos" className="block text-gray-900 font-semibold py-4 hover:text-green-500 transform transition-all duration-300 hover:scale-110 text-lg">Productos</Link>
          <Link href="/red-reciclaje" className="block text-gray-900 font-semibold py-4 hover:text-green-500 transform transition-all duration-300 hover:scale-110 text-lg">Impacto</Link>
          <Link href="/contacto" className="block text-gray-900 font-semibold py-4 hover:text-green-500 transform transition-all duration-300 hover:scale-110 text-lg">Contáctanos</Link>
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-full shadow-xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 mt-6 text-lg font-semibold transform hover:scale-110">
            Recibe Ofertas
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
