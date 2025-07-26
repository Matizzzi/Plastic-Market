import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "claudioperezplasticmarket@gmail.com",
    mensaje: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 min-h-screen py-16 px-6 md:px-12">
      {/* Título de la página */}
      <h1 className="text-5xl font-semibold text-center text-white mb-10">¡Contáctanos!</h1>

      {/* Sección de contacto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de la empresa */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-indigo-200 transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Información de Contacto</h2>
          
          <div className="text-lg text-gray-600 mb-6">
            <p className="flex items-center mb-4">
              <FiMail className="mr-3 text-indigo-600" />
              <a href="mailto:claudioperezplasticmarket@gmail.com" className="text-indigo-600 hover:underline">claudioperezplasticmarket@gmail.com</a>
            </p>
            <p className="flex items-center mb-4">
              <FiPhone className="mr-3 text-indigo-600" />
              <span className="text-gray-800">+56 9 9786 9032</span>
            </p>
            <p className="mb-6 text-gray-600">También puedes enviarnos un mensaje por WhatsApp.</p>

            <div className="flex space-x-6">
              <a href="https://facebook.com/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/company/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-200">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-indigo-200 transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">Envíanos un Mensaje</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="nombre" className="text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="correo" className="text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mensaje" className="text-gray-700">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
