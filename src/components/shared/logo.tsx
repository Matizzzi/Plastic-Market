/* eslint-disable @next/next/no-img-element */
const Logo = () => {
  return (
    <div className="w-10 h-10">
      <img 
        src="/img/sinborde.png"  // Asegúrate de que la ruta esté correcta
        alt="Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
