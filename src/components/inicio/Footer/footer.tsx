import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo and Social Media Section */}
          <div className="text-center md:text-left">
            <Link href="/" aria-label="PlasticMarket - Inicio">
              <div className="w-40 h-40 mx-auto md:mx-0 relative cursor-pointer rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/img/image.png"
                  alt="PlasticMarket Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
            <h2 className="text-4xl font-bold mt-4 tracking-wide">PlasticMarket<sup>®</sup></h2>
            <p className="text-gray-300 mt-2 text-lg">
              Innovación en productos plásticos para cada necesidad.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Síguenos en nuestras redes</h3>
            <div className="flex justify-center md:justify-end gap-6">
              {[
                { href: "#", label: "Instagram", icon: "/img/instagram.png" },
                { href: "#", label: "Facebook", icon: "/img/facebook.png" },
                { href: "#", label: "LinkedIn", icon: "/img/xn.png" },
                { href: "https://www.youtube.com/@plasticmarketspa574", label: "YouTube", icon: "/img/ytnsf.png" },
              ].map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-125"
                  aria-label={`Visítanos en ${media.label}`}
                >
                  <Image src={media.icon} alt={media.label} width={40} height={40} className="drop-shadow-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center border-t border-teal-400 pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} PlasticMarket<sup>®</sup>. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;