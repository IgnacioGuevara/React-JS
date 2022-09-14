import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemCount from './components/ItemCount/ItemCount';
import Titulo from './components/Titulo';
import Input from './components/Input';

import ItemList from './components/ItemList/ItemList';

function App() {
  return (
  <div>
      <NavBar /> 
      {/* cardwidget dentro del NavBar */}
    <hr />
      <div className='container'>
        <Titulo valor= '' />
        <ItemCount initial={1} stock={5} onAdd={0} />
        <ItemList />
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