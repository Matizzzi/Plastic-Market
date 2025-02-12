import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-800 via-teal-600 to-teal-500 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          {/* Logo and Social Media Section */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" aria-label="PlasticMarket - Inicio">
                <div className="w-16 h-16 relative cursor-pointer">
                  {/* Logo Image */}
                  <img
                    src="/img/sinletra.png" // Reemplaza esta ruta con la ubicación de tu imagen
                    alt="PlasticMarket Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </Link>
              <span className="text-3xl font-bold hidden md:inline-block text-white tracking-tight">
                PlasticMarket<sup>®</sup>
              </span>
            </div>

            {/* Social Media Text */}
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Únete a nuestra conversación en redes sociales. Síguenos para más actualizaciones y contenido exclusivo.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6">
              {[
                { href: "#", label: "Instagram", icon: "/icons/instagram.svg" },
                { href: "#", label: "Facebook", icon: "/icons/facebook.svg" },
                { href: "#", label: "LinkedIn", icon: "/icons/linkedin.svg" },
                { href: "https://www.youtube.com/@plasticmarketspa574", label: "YouTube", icon: "img/yt.png" },
              ].map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-200 transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visítanos en ${media.label}`}
                >
                  <img src={media.icon} alt={media.label} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-6 md:space-y-4">
            <h4 className="text-xl font-semibold text-white">Enlaces rápidos</h4>
            <div className="space-y-3">
              {[
                { href: "/trabaja", text: "Trabaja con nosotros" },
                { href: "/privacidad", text: "Políticas de privacidad" },
                { href: "/cookies", text: "Políticas de cookies" },
                { href: "/empresa", text: "Políticas de la empresa" },
                { href: "/denuncias", text: "Canal de denuncias" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block hover:text-teal-200 transition-all duration-300"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center border-t border-teal-400 pt-6 text-sm">
          <p>
            © {new Date().getFullYear()} PlasticMarket. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
