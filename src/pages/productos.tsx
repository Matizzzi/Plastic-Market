import Header from "../components/shared/header";
import React from "react";
import '../styles/globals.css';
import CuerpoProductos from "../components/Producto/cuerpo";
import Footer from "../components/inicio/Footer/footer";
const Productos = () => {
    return <div>
        <Header />
        <CuerpoProductos />
        <Footer />
    </div>;
}
 
export default Productos;