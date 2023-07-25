import {Route, Routes} from 'react-router';
import Home from './components/Home/Home';
import Agenda from './components/Agenda/Agenda'
import AgendaUser from './components/AgendaUser/AgendaUser'
import Cookies from 'js-cookie';
import Register from './components/Registro/Register';
import ProtectedRoute from './components/PrivateRouter/ProtectedRoute';
import { setSession } from './redux/action/index';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import LandingOrHome from './components/LandingPage/LandingOrHome';



function App() {
  //--------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  
  const fetchSession = async () => {
    try {
      const token = Cookies.get('session');
      
      if (!token) {
        return;
      }
      
      const response = await axios.get("http://localhost:3001/getSession", {
        withCredentials: true,
        headers: {
          "x-user-session": JSON.stringify(token),
        }
      });
      
      if (response.status === 200) {
        dispatch(setSession(response.data.user));
      } else {
        Cookies.remove('session');
        dispatch(setSession({}));
      }
    } catch (error) {
      console.log(error);
      Cookies.remove('session');
      dispatch(setSession({}));
    }
  };
  
  useEffect(() => {
    fetchSession();
  }, []);
  
  useEffect(() => {
    const handleTokenRefresh = (event) => {
      if (event.key === 'session' && event.newValue) {
        Cookies.set('session', event.newValue);
        fetchSession();
      }
    };
    
    window.addEventListener('storage', handleTokenRefresh);
    
    return () => {
      window.removeEventListener('storage', handleTokenRefresh);
    };
  }, []);
  //------------------------------------------------------------------------------
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingOrHome/>}/>
        <Route path='/agenda' element={<Agenda/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
        <Route
          path="/agendaUser"
          element={
            <ProtectedRoute>
              <AgendaUser/>
            </ProtectedRoute>
          }
          />
        
      </Routes>
      
    </div>
  );
}

export default App;

