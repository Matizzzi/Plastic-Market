import CuerpoServicios from "../components/servicios/cuerpo";
import React from "react";
import Header from "../components/shared/header";
import '../styles/globals.css';
import Footer from "../components/inicio/Footer/footer";
const Service = () => {
    return <div>
        <Header />
        <CuerpoServicios />
        <Footer />
    </div>;
}
 
export default Service;