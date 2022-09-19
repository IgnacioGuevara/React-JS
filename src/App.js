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

            <Route exact path='/Inicio' element={<Inicio />} />
            <Route exact path='/Tienda' element={<Tienda />} />
            <Route exact path='/Detalle' element= {<Tienda />} /> 
            <Route exact path='/Contacto' element={<Contactos />} />
            <Route exact path='/Carrito' element={<Carro />} />
            
        </Routes>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App;