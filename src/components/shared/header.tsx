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
      className={`fixed left-0 top-0 w-full ${isScrolled ? "bg-white shadow-xl" : "bg-transparent"} transition-all duration-300 py-6 px-10 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-4">
          <Logo />
          <span className={`text-4xl font-extrabold ${isScrolled ? "text-gray-800" : "text-white"} tracking-tight transition-all duration-300`}>
            Market<sup>®</sup>
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className={`hidden md:flex items-center space-x-10 font-semibold ${isScrolled ? "text-gray-800" : "text-white"} transition-all duration-300`}>
          <Link href="/quienes-somos" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110">Quiénes somos</Link>
          <Link href="/servicios" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110">Servicios</Link>
          <Link href="/productos" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110">Productos</Link>
          <Link href="/red-reciclaje" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110">Impacto</Link>
          <Link href="/contacto" className="hover:text-green-600 transform transition-all duration-300 hover:scale-110">Contáctanos</Link>
        </nav>

        {/* Botón de Ofertas */}
        <button
          className={`hidden md:block ${isScrolled ? "bg-gradient-to-r from-green-500 to-green-600 text-white" : "bg-white text-green-500"} py-3 px-8 rounded-full shadow-xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 text-lg font-semibold transform hover:scale-110`}
        >
          Recibe Ofertas
        </button>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-green-600 transition-all duration-300 transform hover:scale-110`}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-lg mt-2 p-6 animate-fade-in transition-all duration-300">
          <Link href="/quienes-somos" className="block text-gray-800 font-semibold py-3 hover:text-green-500 transform transition-all duration-300 hover:scale-110"></Link>
          <Link href="/servicios" className="block text-gray-800 font-semibold py-3 hover:text-green-500 transform transition-all duration-300 hover:scale-110"></Link>
          <Link href="/productos" className="block text-gray-800 font-semibold py-3 hover:text-green-500 transform transition-all duration-300 hover:scale-110"></Link>
          <Link href="/red-reciclaje" className="block text-gray-800 font-semibold py-3 hover:text-green-500 transform transition-all duration-300 hover:scale-110"></Link>
          <Link href="/contacto" className="block text-gray-800 font-semibold py-3 hover:text-green-500 transform transition-all duration-300 hover:scale-110"></Link>
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full shadow-xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 mt-6 text-lg font-semibold transform hover:scale-110">
            Recibe Ofertas
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
