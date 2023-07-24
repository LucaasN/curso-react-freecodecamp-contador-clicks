import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import freeCodeCampLogo from "./images/fcc-logo.png";

function App() {

  const [numClicks, setnumClicks] = useState(0)

  const incrementarContador = () =>{
    setnumClicks(numClicks + 1)
  }

  const reiniciarContador = () =>{
    setnumClicks(0)
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal-contador">
        <Contador 
          numClicks={numClicks} 
          />
        <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={incrementarContador}
          />
        <Boton 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
