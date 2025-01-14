import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20">
      <Image 
        src="/images/fondo.png" // Asegúrate de que la ruta sea válida
        alt="Logo"
        width={80}
        height={80}
        priority
        className="object-contain rounded-full border-2 border-white shadow-lg"
      />
    </div>
  );
};

export default Logo;
