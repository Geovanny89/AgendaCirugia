import {Route, Routes} from 'react-router';
import Home from './components/Home/Home';
import Agenda from './components/Agenda/Agenda';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agenda' element={<Agenda/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
