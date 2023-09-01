import React from "react";

//styles
import "../styles/App.css";

//Componentes
import Aplicacion from "../components/IndexPage/Aplicacion";

function IndexApp(props) {

  const { entrada, setEntrada } = props;

  if(entrada){
    setTimeout(() => {
      setEntrada(false);
    }, 4700);
  }


  return <div className="App">{entrada ? "" : <Aplicacion />}</div>;
}

export default IndexApp;
