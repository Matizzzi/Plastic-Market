"use client";

import { useEffect } from "react";
import Image from "next/image";
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
      className="relative flex justify-center items-center text-white text-center w-full h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/videoOficial.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Contenido */}
      <div className="relative z-10 px-6 sm:px-12 space-y-8 flex flex-col items-center">
        {/* Logo */}
        <div className="logo animate__animated" style={{ maxWidth: "320px" }}>
          <Image
            src="/img/sinborde.png"
            alt="Plastic Market Logo"
            layout="responsive"
            width={320}
            height={320}
            className="drop-shadow-lg"
          />
        </div>

        <h1
          id="hero-heading"
          className="title text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-wide animate__animated"
          style={{ textShadow: "3px 3px 15px rgba(0, 0, 0, 0.9)" }}
        >
          PlasticMarket<sup>®</sup>
        </h1>
        <p
          className="subtitle text-lg sm:text-2xl md:text-3xl font-light animate__animated max-w-3xl"
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
            lineHeight: "2",
          }}
        >
          &ldquo;IDEAS QUE VENDEN MÁS&rdquo;
        </p>
      </div>

      {/* Capa de oscurecimiento */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    </section>
  );
};

export default Cuerpo;
