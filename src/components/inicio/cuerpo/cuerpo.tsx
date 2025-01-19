"use client"; // Marca este archivo como un componente del cliente

import { useEffect } from "react";
import "animate.css";

const Cuerpo = () => {
  useEffect(() => {
    // Agregar animaciones con un pequeño delay
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    setTimeout(() => {
      title.classList.add("animate__fadeInLeft"); // Animación moderna para el título
      subtitle.classList.add("animate__fadeInRight"); // Animación moderna para el slogan
    }, 500); // Retraso de medio segundo para la animación
  }, []);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/img/4k.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Capas de animación de fondo */}
      <div
        style={{
          position: "absolute",
          top: "-70%",
          left: "-70%",
          width: "250%",
          height: "250%",
          background: "radial-gradient(circle, rgba(0, 255, 127, 0.1), transparent 80%)",
          animation: "rotate 20s linear infinite",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.15), transparent 80%)",
          animation: "rotate-reverse 30s linear infinite",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "-30%",
          width: "150%",
          height: "150%",
          background: "radial-gradient(circle, rgba(60, 179, 113, 0.2), transparent 70%)",
          animation: "rotate 40s linear infinite",
          zIndex: 0,
        }}
      ></div>

      <div style={{ zIndex: 2 }}>
        <h1
          className="title animate__animated"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "4rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "20px",
            color: "#fff", // Cambiado a blanco
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Sombra para mejor visibilidad
          }}
        >
          PlasticMarket
        </h1>
        <p
          className="subtitle animate__animated"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#f5f5f5",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
            lineHeight: "1.8",
          }}
        >
          "Transformando el futuro con cada reciclaje"
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
        `}
      </style>
    </div>
  );
};

export default Cuerpo;
