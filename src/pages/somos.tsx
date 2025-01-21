import React from "react";
import Header from "../components/shared/header";
import '../styles/globals.css';
import CuerpoSomos from "../components/Somos/cuerpo";
import Footer from "../components/inicio/Footer/footer";


const Somos: React.FC = () => {
  return (
    <div>
      
      <Header />
      <CuerpoSomos />
      <Footer />
      
    </div>
  );
};

export default Somos;
