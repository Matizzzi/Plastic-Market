"use client";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Correo enviado:\nEmail: ${email}\nMensaje: ${message}`);
    setEmail("");
    setMessage("");
    closeModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-[80px] sm:w-[100px] h-[40px] sm:h-[50px]">
            <Link href="/" aria-label="Inicio">
              <Logo />
            </Link>
          </div>
          <span className={`text-2xl sm:text-4xl font-extrabold ${isScrolled ? "text-gray-900" : "text-white"}`}>
            PlasticMarket<sup>®</sup>
          </span>
        </div>

        {/* Menú Desktop */}
        <nav className={`hidden md:flex space-x-6 text-lg ${isScrolled ? "text-gray-900" : "text-white"}`}>
          {[{ href: "/somos", label: "Quiénes somos" }, { href: "/productos", label: "Productos" }, { href: "/contacto", label: "Contáctanos" }].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-green-600 transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón de Ofertas */}
        <button
          onClick={openModal}
          className="hidden md:block py-2 px-6 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
        >
          Recibe Ofertas
        </button>

        {/* Menú Móvil */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4 text-lg">
            {[{ href: "/somos", label: "Quiénes somos" }, { href: "/productos", label: "Productos" }, { href: "/contacto", label: "Contáctanos" }].map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-900 hover:text-green-600">
                {item.label}
              </Link>
            ))}
            <button onClick={openModal} className="py-2 px-6 bg-green-500 text-white rounded-full">Recibe Ofertas</button>
          </nav>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Envíanos tus Ideas 🚀</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Tu correo" className="w-full p-2 border rounded" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Tu idea" className="w-full p-2 border rounded" rows={3}></textarea>
              <div className="flex justify-end space-x-2">
                <button onClick={closeModal} type="button" className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;