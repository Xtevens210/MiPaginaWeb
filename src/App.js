import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

//Componentes
import Index from "./pages/IndexApp";
import NotFoundPage from "./pages/NotFoundPage";
import Portafolio from "./pages/Portafolio";

function App() {
  const [entrada, setEntrada] = useState(true);

  return (
    <BrowserRouter>
    <header>
      <NavBar/>
    </header>
      <Routes>
        <Route path="/" element={<Index entrada={entrada} setEntrada={setEntrada}/>}/>
        <Route path="/portafolio" element={<Portafolio/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
