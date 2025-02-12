/* eslint-disable @next/next/no-img-element */
const Logo = () => {
  return (
    <div className="w-30 h-30">
      <img 
        src="/img/sinborde.png"  // Asegúrate de que la ruta esté correcta
        alt="Logo"
        width={90}
        height={90}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
