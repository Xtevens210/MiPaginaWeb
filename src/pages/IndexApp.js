import React, { useState } from "react";

//styles
import "../styles/App.css";

//Componentes
import Aplicacion from "../components/IndexPage/Aplicacion";

function IndexApp() {
  const [entrada, setEntrada] = useState(true);

  setTimeout(() => {
    setEntrada(false);
  }, 4700);

  return <div className="App">{entrada ? "" : <Aplicacion />}</div>;
}

export default IndexApp;
