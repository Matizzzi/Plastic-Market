import React from "react";
import Link from "next/link";
import Image from "next/image";

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
                <div className="w-32 h-32 relative cursor-pointer">
                  {/* Logo Image */}
                  <Image
                    src="/img/image.png"
                    alt="PlasticMarket Logo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
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
                  className="text-white hover:text-teal-200 transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visítanos en ${media.label}`}
                >
                  <Image src={media.icon} alt={media.label} width={32} height={32} />
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
