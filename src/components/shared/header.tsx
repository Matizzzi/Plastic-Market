"use client"; // Añadir esta línea

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

// Custom Hook para manejar el estado del menú móvil
const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return {
    isMenuOpen,
    toggleMenu,
  };
};

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
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

  // Clases compartidas para evitar repetición
  const sharedClasses = "hover:text-green-600 transform transition-all duration-300 hover:scale-110";

  return (
    <header
      className={`fixed left-0 top-0 w-full ${isScrolled ? "bg-white shadow-2xl" : "bg-transparent"} transition-all duration-300 py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Logo />
          <span
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${isScrolled ? "text-gray-900" : "text-white"} tracking-tight transition-all duration-300`}
          >
            Market<sup>®</sup>
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className={`hidden md:flex items-center space-x-6 lg:space-x-14 font-semibold ${isScrolled ? "text-gray-900" : "text-white"} transition-all duration-300`}>
          <Link href="/somos" className={`text-sm sm:text-lg ${sharedClasses}`}>
            Quiénes somos
          </Link>
          <Link href="/servicios" className={`text-sm sm:text-lg ${sharedClasses}`}>
            Servicios
          </Link>
          <Link href="/productos" className={`text-sm sm:text-lg ${sharedClasses}`}>
            Productos
          </Link>
          <Link href="/red-reciclaje" className={`text-sm sm:text-lg ${sharedClasses}`}>
            Impacto
          </Link>
          <Link href="/contacto" className={`text-sm sm:text-lg ${sharedClasses}`}>
            Contáctanos
          </Link>
        </nav>

        {/* Botón de Ofertas */}
        <button
          className={`hidden md:block ${isScrolled ? "bg-gradient-to-r from-green-500 to-green-600 text-white" : "bg-white text-green-500"} py-2 px-6 sm:py-4 sm:px-10 rounded-full shadow-2xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 text-sm sm:text-lg font-semibold transform hover:scale-110`}
          aria-label="Recibe ofertas exclusivas"
        >
          Recibe Ofertas
        </button>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${isScrolled ? "text-gray-900" : "text-white"} hover:text-green-600 transition-all duration-300 transform hover:scale-110`}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <div
        className={`md:hidden bg-white shadow-2xl rounded-lg mt-4 p-6 sm:p-8 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`}
      >
        <Link href="/somos" className={`block ${sharedClasses} text-gray-900 font-semibold py-2 sm:py-4`}>
          Quiénes somos
        </Link>
        <Link href="/servicios" className={`block ${sharedClasses} text-gray-900 font-semibold py-2 sm:py-4`}>
          Servicios
        </Link>
        <Link href="/productos" className={`block ${sharedClasses} text-gray-900 font-semibold py-2 sm:py-4`}>
          Productos
        </Link>
        <Link href="/red-reciclaje" className={`block ${sharedClasses} text-gray-900 font-semibold py-2 sm:py-4`}>
          Impacto
        </Link>
        <Link href="/contacto" className={`block ${sharedClasses} text-gray-900 font-semibold py-2 sm:py-4`}>
          Contáctanos
        </Link>
        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full shadow-xl hover:bg-gradient-to-l hover:from-green-600 hover:to-green-500 transition-all duration-300 mt-6 text-base sm:text-lg font-semibold transform hover:scale-110">
          Recibe Ofertas
        </button>
      </div>
    </header>
  );
};

export default Header;
