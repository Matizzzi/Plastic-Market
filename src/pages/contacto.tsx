import Footer from "@/components/inicio/Footer/footer";
import Header from "@/components/shared/header";
import Contacto from "@/components/contacto/cuerpo";
import '../styles/globals.css';
const ContactoPage = () => { // Cambié el nombre del componente a ContactoPage
  return (
    <div>
      <Header />
      <Contacto /> {/* Aquí seguimos usando el componente importado */}
      <Footer />
    </div>
  );
};

export default ContactoPage; // Exportamos ContactoPage
