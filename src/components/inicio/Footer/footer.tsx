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
                  <div className="w-full h-full border-4 border-white rounded-full flex items-center justify-center bg-teal-800">
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </div>
                </div>
              </Link>
              <span className="text-3xl font-bold hidden md:inline-block text-white tracking-tight">
                PlasticMarket
              </span>
            </div>

            {/* Social Media Text */}
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Únete a nuestra conversación en redes sociales. Síguenos para más actualizaciones y contenido exclusivo.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6">
              {[
                { href: "#", label: "Instagram", icon: "M12 2.163..." },
                { href: "#", label: "Facebook", icon: "M24 12.073..." },
                { href: "#", label: "LinkedIn", icon: "M20.447 20.452..." },
                { href: "#", label: "YouTube", icon: "M23.498 6.186..." },
              ].map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  className="text-white hover:text-teal-200 transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visítanos en ${media.label}`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={media.icon}></path>
                  </svg>
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
