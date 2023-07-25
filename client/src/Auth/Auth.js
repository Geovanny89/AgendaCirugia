// auth.js

export const setAuthToken = (token) => {
    if (token) {
      // Almacena el token JWT en el almacenamiento local (localStorage)
      localStorage.setItem('token', token);
      console.log("este es el token : " + token)
    } else {
      // Elimina el token JWT del almacenamiento local
      localStorage.removeItem('token');
    }
  };
  
  export const getAuthToken = () => {
    // Obtiene el token JWT almacenado en el almacenamiento local
    return localStorage.getItem('token');
    
  };
  