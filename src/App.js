import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Titulo from './components/Titulo';
import Input from './components/Input';
import Autos from './components/Autos';
import ItemCount from './components/ItemCount';

function App() {


  const modelos = ['Audi', 'BMW', 'Ferrari'];




  return (
  <div>
      <NavBar /> 
      {/* cardwidget dentro del NavBar */}
    <hr />

      <div className='container'>
        <Titulo valor= 'Marcas De Autos' />
        
        <Autos Items = {modelos} />
        
        <ItemCount />



        <Titulo valor = 'Formulario' />
        <div>
          <Input valor = 'Nombre'/>
          <Input valor = 'Correo Electronico'/>
        </div>

      </div>
    <hr/>
      <Footer/>
  </div>
  );
}

export default App;