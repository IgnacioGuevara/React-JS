import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Titulo from './components/Titulo';
import Input from './components/Input';
/* import Item from './components/Item'; */
import Autos from './components/Autos';

function App() {

/*   const autos = ['Audi', 'BMW', 'Ferrari']; */
/*   const items = autos.map(producto =>(
    <Item valor = {producto} />

  )) */
  const modelos = ['Audi', 'BMW', 'Ferrari'];




  return (
  <div>
      <NavBar /> 
      {/* cardwidget dentro del NavBar */}
    <hr />

      <div className='container'>
        <Titulo valor= 'Marcas De Autos' />
        
        <Autos Items = {modelos} />
        
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