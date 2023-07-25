// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import LandingPage from './LandingPage';
// // import Home from '../Home/Home';

// export default function LandingOrHome() {
//   const session = Cookies.get('session');

//   if (session && Object.keys(session).length > 0) {
//     return <Navigate to="/home" />;
//   }

//   return <LandingPage />;
// }
// import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import LandingPage from '../LandingPage/LandingPage';
// import Agenda from '../Agenda/Agenda';
// import Home from '../Home/Home';
// import { useSelector } from 'react-redux';

// export default function LandingOrHome() {
//   const session = useSelector((state) => state.user);
//   console.log(session)

//   // Si el usuario no está autenticado (no hay sesión), muestra la página de inicio de sesión.
//   if (!session || Object.keys(session).length === 0) {
//     return <LandingPage />;
//   }

//   // Si el usuario tiene el rol "admin", muestra la página de Home.
//   if (session.rol === 'admin') {
//     return <Home />;
//   }

//   // Si el usuario tiene el rol "user", muestra la página de Agenda.
//   if (session.rol === 'user') {
//     return <Agenda />;
//   }

//   // Si no coincide con ninguno de los roles, puedes manejar una redirección predeterminada o mostrar un mensaje de error.
//   return <Navigate to="/error" />;
// }
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function LandingOrHome() {
//   const session = useSelector((state) => state.user);
//   const navigate = useNavigate()

//   // Si el usuario no está autenticado (no hay sesión), muestra la página de inicio de sesión.
//   if (!session || Object.keys(session).length === 0) {
//     return navigate("/" );
//   }

//   // Si el usuario tiene el rol "admin", muestra la página de Home.
//   if (session.rol.includes('admin')) {
//     return navigate("/home");
//   }

//   // Si el usuario tiene el rol "user", muestra la página de Agenda.
//   if (session.rol.includes('user')) {
//     return navigate("/agenda" );
//   }

//   // Si no coincide con ninguno de los roles, puedes manejar una redirección predeterminada o mostrar un mensaje de error.
//   return navigate("/error");
// }
// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function LandingOrHome() {
//   const session = useSelector((state) => state.user);

//   useEffect(() => {
//     if (session) {
//       if (session.rol.includes('admin')) {
//         return <Navigate to="/home" />;
//       } else if (session.rol.includes('user')) {
//         return <Navigate to="/agenda" />;
//       } else {
//         return <Navigate to="/error" />;
//       }
//     }
//   }, [session]);

//   // Si el usuario no está autenticado (no hay sesión), muestra la página de inicio de sesión.
//   return <Navigate to="/" />;
// }
// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function LandingOrHome() {
//   const session = useSelector((state) => state.user);

//   useEffect(() => {
//     if (session) {
//       if (session.rol && session.rol.includes('admin')) {
//         return <Navigate to="/home" />;
//       } else if (session.rol && session.rol.includes('user')) {
//         return <Navigate to="/agendaUser" />;
//       } else {
//         return <Navigate to="/error" />;
//       }
//     }
//   }, [session]);

//   // Si el usuario no está autenticado (no hay sesión), muestra la página de inicio de sesión.
//   return <Navigate to="/" />;
// }
import React from 'react';
import { Navigate } from 'react-router-dom';
// import Cookies  from 'js-cookie';
import LandingPage from './LandingPage';
import { useSelector } from 'react-redux';
// import Home from '../Home/Home';

const LandingOrHome = () => {
  const session = useSelector(state => state.user);
 
  if (session && Object.keys(session).length > 0) {

    if (session.rol && session.rol.includes('user')) {
      return <Navigate to="/agendaUser" />;
    } else if (session.rol && session.rol.includes('admin')) {
      return <Navigate to="/home" />;
    } else {
      // Si el rol no está definido o no coincide con 'user' ni 'admin', redirige a una página de error o maneja el caso según tus necesidades.
      return <Navigate to="/error" />;
    }
  
  }

  return <LandingPage />;
};

export default LandingOrHome;