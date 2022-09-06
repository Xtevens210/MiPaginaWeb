import { useState } from 'react';

//styles
import './styles/App.css';

//Componentes
import Entrada from './components/Entrada';
import Aplicacion from './components/Aplicacion';


function App() {
  const [ entrada, setEntrada ] = useState(true);

  setTimeout(() => {
    setEntrada(false);
  }, 4800);

  return (
    <div className="App">
      {entrada ? (""):(<Aplicacion/>)}
      <Entrada/>
    </div>
  );
}

export default App;
