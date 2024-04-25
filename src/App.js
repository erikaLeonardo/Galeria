import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Area1 from "./components/Area1";
import Galeria from "./components/Galeria";

function App() {

  const [paginaActual, setPaginaActual] = useState('uno');

  const paginaArea = () => {
    setPaginaActual('uno')
  }

  const paginaGaleria = () => {
    setPaginaActual('dos')
  }

  return(
    <div className='container-fluid d-flex flex-wrap justify-content-center bg-dark'>
      <Header text={paginaActual === 'uno' ? 'AREA 1' : 'GALERIA'}/>
      {
        paginaActual === 'uno' && <Area1/>
      }  
      {
        paginaActual === 'dos' && <Galeria/>
      }    
      <Footer onPaginaArea={paginaArea} onPaginaGaleria={paginaGaleria} paginaActual={paginaActual}/>
    </div>
  );
}

export default App;
