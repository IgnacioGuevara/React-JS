import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio/Inicio'
import Tienda from './components/Tienda/Tienda'
import Contactos from './components/Contactos/Contactos'
import Carro from './components/Carro/Carro'




function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
        <Routes>

            <Route exact path='/inicio' element={<Inicio />} />
            <Route exact path='/tienda' element={<Tienda />} />
            <Route exact path='/tienda/:modeloId' element={<Tienda />} />
            <Route exact path='/detalle/detalleId' element= {<Tienda />} /> 
            <Route exact path='/contacto' element={<Contactos />} />
            <Route exact path='/carrito' element={<Carro />} />
            
        </Routes>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App;