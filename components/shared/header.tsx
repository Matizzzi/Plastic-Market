import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/IMG/LOGO.jpg" // Ruta de la imagen en el directorio 'public'
          alt="Plastic Market Logo"
          width={32}
          height={32}
          priority
        />
        <span className="font-bold text-xl text-green-600">Plastic Market</span>
      </div>

      {/* Menú de navegación */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-green-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">
          Plastico
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">
          Vidrio
        </a>
        <a href="#" className="text-gray-700 hover:text-green-600">
          Papel
        </a>
      </nav>

      {/* Búsqueda y opciones */}
      <div className="flex items-center space-x-4">
        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 text-gray-600 focus:outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2">
            Buscar
          </button>
        </div>

        {/* Íconos (Búsqueda, Carrito) */}
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-green-600">
            <FiSearch size={24} />
          </button>
          <button className="text-gray-700 hover:text-green-600">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
