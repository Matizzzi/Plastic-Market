import React from "react";
import Header from "../components/shared/header";
import Cuerpo from "../components/inicio/cuerpo/cuerpo";
import Secction from "../components/inicio/secction/secction";
const Page: React.FC = () => {
  return (
    <div>
      {/* Contenido principal */}
      <Header />
     <Cuerpo />
     <Secction />
    </div>
  );
};

export default Page;
