import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
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
    // Aquí agregarías la lógica para enviar el formulario
    alert("Formulario enviado");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen py-16 px-6 md:px-12">
      {/* Título de la página */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeIn">
        ¡Contáctanos!
      </h1>

      {/* Sección de contacto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de la empresa */}
        <div className="bg-white p-8 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto</h2>
          
          <div className="text-lg text-gray-700 mb-4">
            <p><strong>Correo:</strong> <a href="mailto:info@plasticmarket.com" className="text-blue-500 hover:underline">info@plasticmarket.com</a></p>
            <p><strong>Teléfono:</strong> <span className="text-gray-900">+1 800-123-4567</span></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/18001234567" className="text-green-500 hover:underline">Enviar mensaje</a></p>
          </div>

          <div className="mt-6">
            <strong>Redes Sociales:</strong>
            <div className="flex space-x-6 mt-2">
              <a href="https://facebook.com/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="https://instagram.com/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                Instagram
              </a>
              <a href="https://linkedin.com/company/plasticmarket" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white p-8 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="text-gray-700">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="correo" className="text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="text-gray-700">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
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
