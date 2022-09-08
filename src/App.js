import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemCount from './components/ItemCount/ItemCount';
import Titulo from './components/Titulo';
import Input from './components/Input';
import Autos from './components/Autos';

function App() {


  const modelos = ['iphone', 'samsung', 'xiaomi'];




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