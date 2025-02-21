// Agregar la directiva 'use client' al principio del archivo para que se ejecute correctamente en el cliente
"use client";

import { useEffect } from "react";
import "animate.css";

const Cuerpo = () => {
  useEffect(() => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const logo = document.querySelector(".logo");

    if (title && subtitle && logo) {
      setTimeout(() => {
        logo.classList.add("animate__zoomIn");
        title.classList.add("animate__fadeInUp");
        subtitle.classList.add("animate__fadeInUp");
      }, 500);
    }
  }, []);

  return (
    <section
      className="relative flex justify-center items-center bg-cover bg-center text-white text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/img/nuevoFondo.jpg)",
        height: "100vh",
        overflow: "hidden",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Animación de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-70%] left-[-70%] w-[250%] h-[250%] bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent_80%)] animate-rotate"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(138,43,226,0.15),transparent_80%)] animate-rotate-reverse"></div>
        <div className="absolute top-[-30%] left-[-30%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,165,0,0.2),transparent_70%)] animate-rotate"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 space-y-6">
        {/* Logo */}
        <img
          src="/img/sinborde.png"
          alt="Plastic Market Logo"
          className="logo mx-auto animate__animated"
          style={{
            width: "400px",
            height: "auto",
            filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.7))",
          }}
        />
        <h1
          id="hero-heading"
          className="title text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-wide animate__animated"
          style={{
            textShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)",
          }}
        >
          PlasticMarket<sup>®</sup>
        </h1>
        <p
          className="subtitle text-lg sm:text-2xl md:text-3xl font-light animate__animated"
          style={{
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)",
            lineHeight: "1.8",
          }}
        >
          &ldquo;IDEAS QUE VENDEN MAS&rdquo;
        </p>
      </div>

      {/* Estilos en línea */}
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }

        .animate-rotate-reverse {
          animation: rotate-reverse 30s linear infinite;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem !important;
          }
          .subtitle {
            font-size: 1.5rem !important;
          }
          .logo {
            width: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Cuerpo;
