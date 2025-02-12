"use client";  // Esta es la directiva que le dice a Next.js que es un componente del cliente

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return { isMenuOpen, toggleMenu };
};

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  // Debounce para optimizar el evento scroll
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolled(window.scrollY > 50), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sharedClasses = "hover:text-green-600 transform transition duration-300 hover:scale-105";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Envolver en Link para redirigir a la página principal */}
        <div className="flex items-center space-x-4">
          <div className="w-[100px] h-[50px]">
            <Link href="/" aria-label="Ir a la página principal">
              <Logo />
            </Link>
          </div>
          <span
            className={`text-3xl font-extrabold ${
              isScrolled ? "text-gray-900" : "text-white"
            } tracking-tight transition-colors`}
          >
            PlasticMarket<sup>®</sup>
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className={`hidden md:flex space-x-8 font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
          {[
            { href: "/somos", label: "Quiénes somos" },
            { href: "/servicios", label: "Servicios" },
            { href: "/productos", label: "Productos" },
            { href: "/Impacto", label: "Impacto" },
            { href: "/contacto", label: "Contáctanos" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm sm:text-base ${sharedClasses}`}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de Ofertas */}
        <button
          className={`hidden md:block py-2 px-6 rounded-full shadow-md font-semibold transition-transform duration-300 ${
            isScrolled
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
              : "bg-white text-green-600 hover:bg-green-100"
          }`}
          aria-label="Recibe ofertas exclusivas"
        >
          Recibe Ofertas
        </button>

        {/* Menú móvil */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition-transform ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg mt-4 px-6 py-4 space-y-4">
          {[
            { href: "/somos", label: "Quiénes somos" },
            { href: "/servicios", label: "Servicios" },
            { href: "/productos", label: "Productos" },
            { href: "/Impacto", label: "Impacto" },
            { href: "/contacto", label: "Contáctanos" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-gray-900 font-semibold ${sharedClasses}`}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            Recibe Ofertas
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
