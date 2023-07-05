import {Route, Routes} from 'react-router';
import Home from './components/Home/Home';
import Agenda from './components/Agenda/Agenda';
import CrearMedico from './components/Crear/Medicos/CrearMedico'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agenda' element={<Agenda/>}/>
        <Route path='/crearCirujano' element={<CrearMedico/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
