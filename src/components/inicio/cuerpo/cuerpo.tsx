"use client"; // Marca este archivo como un componente del cliente

import { useEffect } from "react";
import "animate.css";

const Cuerpo = () => {
  useEffect(() => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");

    if (title && subtitle) {
      setTimeout(() => {
        title.classList.add("animate__fadeInLeft");
        subtitle.classList.add("animate__fadeInRight");
      }, 500);
    }
  }, []);

  return (
    <section
      className="relative flex justify-center items-center bg-cover bg-center text-white text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/img/4k.png)",
        height: "100vh",
        overflow: "hidden",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Animación de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-70%] left-[-70%] w-[250%] h-[250%] bg-[radial-gradient(circle,rgba(0,255,127,0.1),transparent_80%)] animate-rotate"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,191,255,0.15),transparent_80%)] animate-rotate-reverse"></div>
        <div className="absolute top-[-30%] left-[-30%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(60,179,113,0.2),transparent_70%)] animate-rotate"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8">
        <h1
          id="hero-heading"
          className="title text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wide mb-6 animate__animated"
          style={{
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          PlasticMarket
        </h1>
        <p
          className="subtitle text-lg sm:text-xl md:text-2xl font-light mb-8 animate__animated"
          style={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
            lineHeight: "1.8",
          }}
        >
          &ldquo;Transformando el futuro con cada reciclaje&rdquo;
        </p>
      </div>

      <style>
        {`
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
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Cuerpo;
