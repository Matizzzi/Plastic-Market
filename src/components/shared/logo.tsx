import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-10 h-10">
      <Image 
        src="/images/fondo.png" // Ruta relativa desde 'public'
        alt="Logo"
        width={40}
        height={40}
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
