"use client"; // Asegúrate de que este componente se ejecute solo en el cliente

import React from "react";
import Image from "next/image";

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
    alert("Explorando más información sobre nuestros materiales reciclados...");
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">
          ¿QUÉ RECICLAMOS?
        </h2>
        <hr className="w-16 mx-auto border-t-4 border-green-500 mt-3" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-6 md:px-10">
        {items.map((item, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => console.log(`Seleccionado: ${item.label}`)}
            onKeyPress={(e) => e.key === "Enter" && console.log(`Seleccionado: ${item.label}`)}
            aria-label={`Ver más información sobre ${item.label}`}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-300 shadow-md hover:scale-110 transition-transform duration-300 relative">
              <Image
                src={item.img}
                alt={`Material reciclable: ${item.label}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleMoreInfo}
          className="flex items-center bg-green-500 text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300 space-x-2"
          aria-label="Obtener más información sobre los materiales reciclables"
        >
          <span>Más Información</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ReciclamosSection;
