import React from "react";

const contactosData = [
  { id: 1, nombre: "Juan Pérez", telefono: "123-456-7890", correo: "juan@email.com" },
  { id: 2, nombre: "Ana Gómez", telefono: "098-765-4321", correo: "ana@email.com" },
  { id: 3, nombre: "Carlos López", telefono: "321-654-9870", correo: "carlos@email.com" },
  { id: 4, nombre: "María Fernández", telefono: "987-654-3210", correo: "maria@email.com" },
];

const Contacto = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
      {/* Título de la página */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Todos los Contactos
      </h1>

      {/* Lista de contactos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactosData.map((contacto) => (
          <div key={contacto.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{contacto.nombre}</h3>
            <p className="text-gray-600">
              <strong>Teléfono:</strong> {contacto.telefono}
            </p>
            <p className="text-gray-600">
              <strong>Correo:</strong> <a href={`mailto:${contacto.correo}`} className="text-blue-500">{contacto.correo}</a>
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Enviar Mensaje
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacto;
