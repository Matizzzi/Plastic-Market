"use client"; // Asegúrate de que este componente se ejecute solo en el cliente

import React from "react";

const ReciclamosSection = () => {
  const items = [
    { img: "/img/producto.jpg", label: "LÍNEA OFICINA" },
    { img: "/img/imagen2.jpg", label: "METALES Y CHATARRA" },
    { img: "/img/imagen3.jpg", label: "PILAS" },
    { img: "/img/imagen4.jpg", label: "TAPAS PP" },
    { img: "/img/imagen5.jpg", label: "HDPE" },
    { img: "/img/imagen6.jpg", label: "LATAS" },
  ];

  const handleMoreInfo = () => {
    alert("Mostrando más información...");
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 font-serif">
          ¿QUÉ RECICLAMOS?
        </h2>
        <hr className="w-16 mx-auto border-t-2 border-green-500 mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => console.log(`Seleccionado: ${item.label}`)}
            aria-label={`Ver más sobre ${item.label}`}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 hover:scale-110 transition-transform duration-300 ease-in-out shadow-sm">
              <img
                src={item.img}
                alt={`Imagen de reciclaje de ${item.label}`}
                className="w-full h-full object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="text-base font-medium text-gray-800">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleMoreInfo}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          aria-label="Obtener más información sobre lo que reciclamos"
        >
          <span>Más Información</span>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ReciclamosSection;
