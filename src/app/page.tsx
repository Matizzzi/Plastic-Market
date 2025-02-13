import React from "react";
import Header from "../components/shared/header";
import Cuerpo from "../components/inicio/cuerpo/cuerpo";
import Secction from "../components/inicio/secction/secction";
import Products from "../components/inicio/Products/Products";
import Footer from "../components/inicio/Footer/footer";



const Page: React.FC = () => {
  return (
    <div>
      {/* Contenido principal */}
      <Header />
     <Cuerpo />
     <Secction />
    < Products />
    <Footer />
  
    </div>
  );
};

export default Page;
