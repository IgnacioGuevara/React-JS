import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Titulo from './components/Titulo';
import Input from './components/Input';
import ItemsListContainer from './components/ItemListContainer/ItemsListContainer';

function App() {
  return (
  <div>
      <NavBar /> 
      {/* cardwidget dentro del NavBar */}
    <hr />
      <div className='container'>
        <Titulo valor= 'CELULARES:' />
        <ItemsListContainer />
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