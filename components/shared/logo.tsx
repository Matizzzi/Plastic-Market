import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-12 h-12">
      <Image 
        src="/images/fondo.png" // Ruta correcta basada en el archivo en 'public/images'
        alt="Logo"
        width={48}
        height={48}
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
